import { api } from "../api";
import { gql } from "graphql-request";

export const tasksAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: ({ view, start, end, page }) => ({
        body: gql`
          query Query($params: TasksQueryParams!) {
            getTasks(params: $params) {
              ... on TaskSingleListView {
                count
                date
                tasks {
                  id
                  name
                  notes
                  priority
                  type
                  date
                  isCompleted
                }
                page
                nextPage
              }
            }
          }
        `,
        variables: { params: { view, start, end, page } },
      }),
      providesTags: ["Tasks"],
    }),
    getTasksAggregated: builder.query({
      query: ({ view, start, end, page }) => ({
        body: gql`
          query Query($params: TasksQueryParams!) {
            getTasks(params: $params) {
              ... on TaskAggregatedListView {
                tasks {
                  count
                  date
                  tasks {
                    id
                    name
                    notes
                    priority
                    type
                    date
                    isCompleted
                  }
                  page
                  nextPage
                }
              }
            }
          }
        `,
        variables: { params: { view, start, end, page } },
      }),
      providesTags: ["Tasks"],
    }),
    createTask: builder.mutation({
      query: ({ name, notes, type, date, priority, isCompleted }) => ({
        body: gql`
          mutation Mutation($input: CreateTaskInput!) {
            createTask(input: $input) {
              id
              name
              notes
              date
              type
              priority
            }
          }
        `,
        variables: {
          input: { name, notes, type, date, priority, isCompleted },
        },
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.createTask) {
            dispatch(
              api.util.upsertQueryData("getTasks", id, {
                tasks: [data.createTask],
              }),
            );
          }
        } catch {
          console.log("Create task API error");
        }
      },
    }),
    updateTask: builder.mutation({
      query: ({ id, name, date, notes = "", isCompleted, priority }) => ({
        body: gql`
          mutation Mutation($input: UpdateTaskInput!) {
            updateTask(input: $input) {
              id
              name
              notes
              type
              priority
              isCompleted
              date
            }
          }
        `,
        variables: {
          input: { id, name, date, notes, isCompleted, priority },
        },
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data?.updateTask) {
            dispatch(
              api.util.upsertQueryData("getTasks", id, {
                tasks: [data.updateTask],
              }),
            );
          }
        } catch {
          console.log("Update task API error");
        }
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        body: gql`
          mutation Mutation($deleteTaskId: ID!) {
            deleteTask(id: $deleteTaskId)
          }
        `,
        variables: { deleteTaskId: id },
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTasksAggregatedQuery,
  useLazyGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksAPI;

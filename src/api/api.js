import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body, variables }) => {
    const requestHeaders = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZjOWIwOWVkNWEzODdlNDdmYmIwMmUiLCJpYXQiOjE3MDE2MTYzOTN9.R9AVUDrPF6CL3F2fEjDVyHbSLP5eHAr6BuGryWAmxMI`,
    };

    try {
      const result = await request(baseUrl, body, variables, requestHeaders);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const api = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: "http://localhost:4000/graphql",
  }),
  tagTypes: ["Tasks"],

  endpoints: (builder) => ({
    getTasks: builder.query({
      query: ({ view, start, end, page }) => ({
        body: gql`
          query Query($params: TasksQueryParams!) {
            getTasks(params: $params) {
              ... on TaskSingleListView {
                count
                tasks {
                  id
                  name
                  notes
                  type
                  date
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

          dispatch(
            api.util.upsertQueryData("getTasks", id, {
              tasks: [data.createTask],
            }),
          );
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
          input: { id, name, date, notes, isCompleted, priority: 1 },
        },
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            api.util.upsertQueryData("getTasks", id, {
              tasks: [data.updateTask],
            }),
          );
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
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = api;

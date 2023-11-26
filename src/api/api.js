import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body, variables }) => {
    const requestHeaders = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTVmYjZhMzNmMTg2MzgxZTMwMjc4ZjMiLCJpYXQiOjE3MDA3NzIyMzN9.yg7915y0NXN2dw_NMNROMQVovm7uBlb81rW3aLqXNpY`,
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
                  name
                  id
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
      query: ({ name, type, description, date, priority }) => ({
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
          input: { name, type, notes: description, date, priority },
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
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = api;

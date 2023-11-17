import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body, variables }) => {
    try {
      const result = await request(baseUrl, body, variables);
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
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: ({ view, start, end, page }) => ({
        body: gql`
            query getTasks(view: $view, start: $start, end: $end, page: $page){
              tasks: {
                  id,
                  name,
                  type,
                  isCompleted,
                  notes,
                  priority,
                  createdAt
              }
            }
        `,
        variables: { view, start, end, page },
      }),
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
    }),
    createTask: builder.mutation({
      query: ({ name, type, description, date, priority }) => ({
        body: gql`
          mutation createTask($name: String!, $type: String!, $description: String, date: String, priority: String){
             id,
             name,
             type,
             date,
             isCompleted,
             description,
             priority,
             createdAt
          }
        `,
        variables: { name, type, description, date, priority },
      }),
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = api;

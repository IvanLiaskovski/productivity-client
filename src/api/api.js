import Cookies from "js-cookie";
import { createApi } from "@reduxjs/toolkit/query/react";
import { request, ClientError } from "graphql-request";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body, variables }) => {
    const token = Cookies.get("productivity-token");
    const requestHeaders = {
      Authorization: token ? `Bearer ${token}` : `Bearer`,
    };

    try {
      const result = await request(baseUrl, body, variables, requestHeaders);
      return { data: result };
    } catch (error) {
      if (error.response.errors[0].message?.includes("jwt")) {
        console.log("Token expired");
        Cookies.remove("productivity-token");
      }

      if (error instanceof ClientError) {
        return { error: `Status: ${error.response.status}. Error: ${error}` };
      }
      return { error: `Status: 500. Error: ${error}` };
    }
  };

export const api = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: "http://localhost:4000/graphql",
  }),
  tagTypes: ["Tasks"],

  endpoints: () => ({}),
});

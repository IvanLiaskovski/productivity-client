import { api } from "../api";
import { gql } from "graphql-request";
import Cookies from "js-cookie";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: ({ name, email, password }) => ({
        body: gql`
          mutation Mutation($input: RegisterUserInput!) {
            registerUser(input: $input) {
              token {
                accessToken
                expiresIn
              }
            }
          }
        `,
        variables: { input: { name, email, password } },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data.registerUser.token);
          const token = data.registerUser.token.accessToken;
          const expiredTime = data.registerUser.token.expiresIn;
          console.log(token);
          Cookies.set("productivity-token", token, 1); // Temporary set to 1 day
          window.location = "/";
        } catch (err) {
          console.log("SignUp API error", err);
        }
      },
    }),
    logIn: build.mutation({
      query: ({ email, password }) => ({
        body: gql`
          mutation Mutation($input: LoginUserInput!) {
            loginUser(input: $input) {
              token {
                accessToken
                expiresIn
              }
            }
          }
        `,
        variables: { input: { email, password } },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data.loginUser.token);
          const token = data.loginUser.token.accessToken;
          const expiredTime = data.loginUser.token.expiresIn;
          console.log(token);
          Cookies.set("productivity-token", token, 1); // Temporary set to 1 day
          window.location = "/";
        } catch (err) {
          console.log("SignUp API error", err);
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = userApi;

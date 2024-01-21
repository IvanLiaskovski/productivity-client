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
              auth {
                token {
                  accessToken
                  expiresIn
                }
              }
            }
          }
        `,
        variables: { input: { name, email, password } },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data.registerUser.auth.token.accessToken;
          const expiredTime = data.registerUser.auth.token.expiresIn;

          Cookies.set("productivity-token", token, expiredTime);
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
              auth {
                token {
                  accessToken
                  expiresIn
                }
              }
            }
          }
        `,
        variables: { input: { email, password } },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data.loginUser.auth.token.accessToken;
          const expiredTime = data.loginUser.auth.token.expiresIn;

          Cookies.set("productivity-token", token, expiredTime);
          window.location = "/";
        } catch (err) {
          console.log("SignUp API error", err);
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = userApi;

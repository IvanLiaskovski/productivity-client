import { gql } from "graphql-request";
import Cookies from "js-cookie";
import { api } from "../api";

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

          Cookies.set("productivity-token", token, {
            expires: expiredTime / 3600000 / 24,
          });
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

          Cookies.set("productivity-token", token, {
            expires: expiredTime / 3600 / 24,
          });
          window.location = "/";
        } catch (err) {
          console.log("SignIn API error", err);
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = userApi;

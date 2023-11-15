import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "../features/Tasks/tasksSlice";
import { api } from "../api/api";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

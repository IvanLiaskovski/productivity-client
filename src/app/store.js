import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/Tasks/tasksSlice";
import { api } from "../api/api";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
      immutableCheck: true,
    }).concat(api.middleware),
});

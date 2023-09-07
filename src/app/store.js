import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/Tasks/tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { sortTasks } from "./helpers/tasksHelpers";
import { INITAIAL_TASKS } from "../../data/initialTasksData";
import moment from "moment";

const tasksAdapter = createEntityAdapter({});
const initialTasks = localStorage.getItem("productivityTasks")?.length
  ? JSON.parse(localStorage.getItem("productivityTasks"))
  : INITAIAL_TASKS;

const initialState = tasksAdapter.getInitialState({
  ...initialTasks,
  mode: "day",
  onlyActive: false,
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: {
      reducer: (state, action) => {
        const { date } = action.payload;
        const mode = state.mode;

        tasksAdapter.addOne(state, {
          ...action.payload,
          date: mode === "year" ? new Date(date).getFullYear() : date,
          type: mode,
        });
      },
      prepare: (data) => ({
        payload: {
          ...data,
          id: uuid(),
          isCompleted: false,
          date: moment(data.date).format("YYYY-MM-DD"),
        },
      }),
    },
    updateTask: tasksAdapter.upsertOne,
    removeTask: tasksAdapter.removeOne,
    setTasksMode: (state, action) => ({ ...state, mode: action.payload }),
    setTasksOnlyActive: (state, action) => ({
      ...state,
      onlyActive: action.payload,
    }),
  },
});

//Selectors
export const selectTasks = (state) => state.tasks;
export const selectTasksMode = (state) => state.tasks.mode;
export const selectTasksOnlyActive = (state) => state.tasks.onlyActive;

export const selectTaskIdsByDate = createSelector(
  [selectTasks, (_, date) => date],
  (tasks, date) => {
    let taskArray = Object.values(tasks.entities).filter(
      (task) => task?.date === date,
    );

    if (tasks.onlyActive) {
      taskArray = taskArray.filter((task) => !task.isCompleted);
    }

    return sortTasks(taskArray).map((task) => task.id);
  },
);

export const selectTasksByDate = createSelector(
  [selectTasks, (_, date) => date],
  (tasks, date) => {
    return sortTasks(
      Object.values(tasks.entities).filter((task) => task?.date === date),
    );
  },
);

export const {
  selectAll: selectAllTasks,
  selectIds: selectAllTaskIds,
  selectById: selectTaskById,
  selectEntities,
} = tasksAdapter.getSelectors(selectTasks);

export const {
  createTask,
  updateTask,
  removeTask,
  setTasksMode,
  setTasksOnlyActive,
  setTaskDate,
} = tasksSlice.actions;

export default tasksSlice.reducer;

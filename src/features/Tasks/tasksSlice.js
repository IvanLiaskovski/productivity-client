import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { tasksAPI } from "../../api/tasks/tasks";
import { v4 as uuid } from "uuid";
import { sortTasks } from "./helpers/tasksHelpers";
import { INITAIAL_TASKS } from "../../data/initialTasksData";
import moment from "moment";

const tasksAdapter = createEntityAdapter({});
const initialTasks =
  localStorage.getItem("productivityTasks")?.length &&
  Cookies.get("productivity-token") === "null"
    ? JSON.parse(localStorage.getItem("productivityTasks"))
    : Cookies.get("productivity-token") !== "null"
    ? {}
    : INITAIAL_TASKS;

const initialState = tasksAdapter.getInitialState({
  ...initialTasks,
  onlyActive: false,
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: {
      reducer: (state, action) => {
        const { date, type } = action.payload;

        tasksAdapter.addOne(state, {
          ...action.payload,
          date: type === "year" ? moment(date).format("YYYY") : date,
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
    setTasksOnlyActive: (state, action) => ({
      ...state,
      onlyActive: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        tasksAPI.endpoints.getTasks.matchFulfilled,
        (state, action) => {
          const tasksData = action.payload?.getTasks
            ? action.payload.getTasks.tasks
            : action.payload.tasks;

          if (!tasksData) return;

          const tasks = tasksData.map(
            ({ id, name, notes, type, date, isCompleted, priority }) => ({
              id,
              name,
              notes,
              type,
              date:
                type === "year"
                  ? moment(date).format("YYYY")
                  : moment(date).format("YYYY-MM-DD"),
              isCompleted,
              priority,
            }),
          );

          tasksAdapter.upsertMany(state, tasks);
        },
      )
      .addMatcher(
        tasksAPI.endpoints.getTasksAggregated.matchFulfilled,
        (state, action) => {
          const tasksAggregatedData = action.payload?.getTasks
            ? action.payload.getTasks.tasks
            : action.payload.tasks;

          if (!tasksAggregatedData) return;

          const tasks = tasksAggregatedData
            .map(({ tasks }) => tasks)
            .flat()
            .map(({ id, name, notes, type, date, isCompleted, priority }) => ({
              id,
              name,
              notes,
              type,
              date:
                type === "year"
                  ? moment(date).format("YYYY")
                  : moment(date).format("YYYY-MM-DD"),
              isCompleted,
              priority,
            }));

          tasksAdapter.upsertMany(state, tasks);
        },
      );
  },
});

//Selectors
export const selectTasks = (state) => state.tasks;
export const selectTasksOnlyActive = (state) => state.tasks.onlyActive;

export const selectTaskIdsByDate = createSelector(
  [selectTasks, (_, date) => date, (_, date, type) => type],
  (tasks, date, type) => {
    let taskArray = Object.values(tasks.entities).filter(
      (task) => task?.date === date && task?.type === type,
    );

    if (tasks.onlyActive) {
      taskArray = taskArray.filter((task) => !task.isCompleted);
    }

    return sortTasks(taskArray).map((task) => task.id);
  },
);

export const selectTasksByDate = createSelector(
  [selectTasks, (_, date) => date, (_, date, type) => type],
  (tasks, date, type) => {
    tasks = Object.values(tasks.entities);

    if (Array.isArray(date)) {
      return sortTasks(
        tasks.filter(
          (task) => date.includes(task?.date) && task?.type === type,
        ),
      );
    }
    return sortTasks(
      tasks.filter((task) => task?.date === date && task?.type === type),
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
  setTasksOnlyActive,
  setTaskDate,
} = tasksSlice.actions;

export default tasksSlice.reducer;

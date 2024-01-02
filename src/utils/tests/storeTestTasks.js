import store from "../../app/store";
import moment from "moment";
import { createTask, removeTask } from "../../features/Tasks/tasksSlice";

export function createTestTask(
  content,
  date = moment().format("YYYY-MM-DD"),
  type = "day",
) {
  store.dispatch(
    createTask({
      content,
      date,
      type,
    }),
  );

  const allTasks = store.getState().tasks.entities;
  return Object.entries(allTasks).find(
    (item) => item[1].content === content,
  )[0];
}

export function removeTestTask(taskId) {
  store.dispatch(removeTask(taskId));
}

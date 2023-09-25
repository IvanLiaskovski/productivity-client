import store from "../../app/store";
import { createTask, removeTask } from "../../features/Tasks/tasksSlice";

export function createTestTask(content) {
  const date = new Date();

  store.dispatch(
    createTask({
      content,
      date,
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

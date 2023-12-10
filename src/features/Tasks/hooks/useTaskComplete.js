import { useUpdateTask } from "./useUpdateTask";

export default function useTaskComplete(id) {
  const updateTask = useUpdateTask();

  return function completeTask() {
    updateTask({ id, isCompleted: true });
  };
}

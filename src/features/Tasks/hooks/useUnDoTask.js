import { useUpdateTask } from "./useUpdateTask";

export function useUnDoTask(taskId) {
  const updateTask = useUpdateTask();

  return () => updateTask({ id: taskId, isCompleted: false });
}

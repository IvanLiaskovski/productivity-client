import { useDispatch } from "react-redux";
import { updateTask } from "../tasksSlice";

export function useUnDoTask(taskId) {
  const dispatch = useDispatch();
  const undoTask = () => {
    dispatch(updateTask({ id: taskId, isCompleted: false }));
  };

  return undoTask;
}

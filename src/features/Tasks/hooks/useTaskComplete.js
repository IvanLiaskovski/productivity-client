import { useDispatch } from "react-redux";
import { updateTask } from "../tasksSlice";

export default function useTaskComplete(id) {
  const dispatch = useDispatch();

  return function completeTask() {
    dispatch(updateTask({ id, isCompleted: true }));
  };
}

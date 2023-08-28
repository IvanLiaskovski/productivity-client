import { useDispatch } from "react-redux";
import { removeTask } from "../tasksSlice";

export default function useTaskDelete(id) {
  const dispatch = useDispatch();

  return function deleteTask() {
    setTimeout(() => dispatch(removeTask(id)), 300);
  };
}

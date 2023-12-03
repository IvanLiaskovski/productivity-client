import { useDeleteTaskMutation } from "../../../api/api";
import { useDispatch } from "react-redux";
import { removeTask } from "../tasksSlice";

export default function useTaskDelete(id) {
  const [removeTaks] = useDeleteTaskMutation();
  const dispatch = useDispatch();

  return function deleteTask() {
    setTimeout(() => {
      removeTaks(id);
      dispatch(removeTask(id));
    }, 300);
  };
}

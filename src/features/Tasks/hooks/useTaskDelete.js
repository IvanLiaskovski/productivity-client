import { useCheckAuth } from "../../../context/AuthenticationContext";
import { useDeleteTaskMutation } from "../../../api/api";
import { useDispatch } from "react-redux";
import { removeTask } from "../tasksSlice";

export default function useTaskDelete(id) {
  const { isDemo, user } = useCheckAuth();
  const [removeTaks] = useDeleteTaskMutation();
  const dispatch = useDispatch();

  return function deleteTask() {
    setTimeout(async () => {
      let isSuccessful = false;
      if (user) {
        await removeTaks(id)
          .unwrap()
          .then(() => (isSuccessful = true));
      }

      if (isDemo || isSuccessful) {
        dispatch(removeTask(id));
      }
    }, 300);
  };
}

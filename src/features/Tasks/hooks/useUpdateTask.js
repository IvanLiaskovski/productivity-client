import { useCheckAuth } from "../../../context/AuthenticationContext";
import { useUpdateTaskMutation } from "../../../api/api";
import { useDispatch } from "react-redux";
import { updateTask } from "../tasksSlice";

export function useUpdateTask() {
  const { user } = useCheckAuth();

  const [remoteUpdate] = useUpdateTaskMutation();
  const dispatch = useDispatch();

  function updateTaskHandle({ id, name, notes, date, isCompleted, priority }) {
    dispatch(
      updateTask({
        id,
        ...(name !== undefined && { name }),
        ...(notes !== undefined && { notes }),
        ...(date !== undefined && { date }),
        ...(isCompleted !== undefined && { isCompleted }),
        ...(priority !== undefined && { priority }),
      }),
    );

    if (user) {
      remoteUpdate({ id, name, notes, date, isCompleted, priority });
    }
  }

  return updateTaskHandle;
}

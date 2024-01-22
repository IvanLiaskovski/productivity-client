import { useState } from "react";
import { useCheckAuth } from "../../../context/AuthenticationContext";
import { useUpdateTaskMutation } from "../../../api/api";
import { useDispatch } from "react-redux";
import { updateTask } from "../tasksSlice";

export function useUpdateTask() {
  const dispatch = useDispatch();
  const { isDemo, user } = useCheckAuth();

  const [serverUpdate] = useUpdateTaskMutation();
  const [errors, setErrors] = useState([]);

  async function updateTaskHandle({
    id,
    name,
    notes,
    date,
    isCompleted,
    priority,
  }) {
    let isSuccessful = true;

    if (user) {
      await serverUpdate({ id, name, notes, date, isCompleted, priority })
        .unwrap()
        .then(() => setErrors([]))
        .catch((res) => {
          isSuccessful = false;
          if (res?.data?.response?.errors[0]?.errorsPretty?.length) {
            setErrors(res.data.response.errors[0].errorsPretty);
          } else {
            setErrors([
              {
                message:
                  "Something went wrong. Please try again later or reload the page",
              },
            ]);
          }
        });
    }
    if (isDemo && !user) {
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
    }
    return isSuccessful;
  }

  return [updateTaskHandle, errors];
}

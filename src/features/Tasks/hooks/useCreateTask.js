import { useCheckAuth } from "../../../context/AuthenticationContext";
import { useDispatch } from "react-redux";
import { createTask } from "../tasksSlice";
import { useCreateTaskMutation } from "../../../api/tasks/tasks";
import { useState } from "react";
import moment from "moment";

export function useCreateTask({ name, notes, priority, date, type }) {
  date =
    type === "year"
      ? moment(date).format("YYYY")
      : moment(date).format("YYYY-MM-DD");

  const dispatch = useDispatch();
  const { user, isDemo } = useCheckAuth();
  const [createTaskMutation] = useCreateTaskMutation();
  const [errors, setErrors] = useState([]);

  const handleTaskCreation = async () => {
    let isSuccessful = true;

    if (user) {
      await createTaskMutation({
        name,
        notes,
        priority,
        date,
        type,
      })
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
        createTask({
          name,
          notes,
          date,
          priority,
          type,
        }),
      );
    }

    return isSuccessful;
  };

  return [handleTaskCreation, errors];
}

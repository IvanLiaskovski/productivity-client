import { useCheckAuth } from "../../../context/AuthenticationContext";
import { useDispatch } from "react-redux";
import { createTask } from "../tasksSlice";
import { useCreateTaskMutation } from "../../../api/api";

export function useCreateTask({ name, notes, priority, date, type }) {
  const { user, isDemo } = useCheckAuth();
  const dispatch = useDispatch();
  const [createTaskMutation] = useCreateTaskMutation();

  const handleTaskCreation = async () => {
    if (user) {
      await createTaskMutation({
        name,
        notes,
        priority: 1,
        date,
        type,
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
  };

  return [handleTaskCreation];
}

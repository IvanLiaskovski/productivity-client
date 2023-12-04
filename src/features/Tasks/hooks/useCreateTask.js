import { useDispatch } from "react-redux";
import { createTask } from "../tasksSlice";
import { useCreateTaskMutation } from "../../../api/api";

export function useCreateTask({ name, notes, priority, date, type }) {
  //ToDo Login
  const isLogin = true;

  const dispatch = useDispatch();
  const [createTaskMutation] = useCreateTaskMutation();

  const handleTaskCreation = async () => {
    if (isLogin) {
      await createTaskMutation({
        name,
        notes,
        priority: 1,
        date,
        type,
      });
    }

    if (!isLogin) {
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

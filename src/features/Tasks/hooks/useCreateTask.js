import { useDispatch } from "react-redux";
import { createTask } from "../tasksSlice";
import { useCreateTaskMutation } from "../../../api/api";

export function useCreateTask({ content, description, priority, date, type }) {
  //ToDo Login
  const isLogin = true;

  const dispatch = useDispatch();
  const [createTaskMutation] = useCreateTaskMutation();

  const handleTaskCreation = async () => {
    if (isLogin) {
      await createTaskMutation({
        name: content,
        notes: description,
        priority: 1,
        date,
        type,
      });
    }

    if (!isLogin) {
      dispatch(
        createTask({
          content,
          description,
          priority,
          date,
          type,
        }),
      );
    }
  };

  return [handleTaskCreation];
}

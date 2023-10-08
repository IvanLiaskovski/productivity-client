import { useSelector } from "react-redux";
import { selectTasksByDate, selectTasksMode } from "../tasksSlice";
import { useTasksDateContext } from "../context/TasksDateContext";
import moment from "moment";

export function useGetTasks() {
  const { date } = useTasksDateContext();
  const mode = useSelector(selectTasksMode);

  const tasks = useSelector((state) =>
    selectTasksByDate(
      state,
      mode === "year" ? date.getFullYear() : moment(date).format("YYYY-MM-DD"),
    ),
  );

  return tasks;
}

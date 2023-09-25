import { useSelector } from "react-redux";
import { selectTasksByDate, selectTasksMode } from "../tasksSlice";
import { useTasksDateRangeContext } from "../context/TasksDateRangeContext";
import { formatDate } from "../../../helpers/formatDate";

export function useGetTasks() {
  const { date } = useTasksDateRangeContext();
  const mode = useSelector(selectTasksMode);

  const tasks = useSelector((state) =>
    selectTasksByDate(
      state,
      mode === "year" ? date.getFullYear() : formatDate(date),
    ),
  );

  return tasks;
}

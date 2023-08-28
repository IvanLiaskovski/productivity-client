import { useSelector } from "react-redux";
import { selectTaskIdsByDate, selectTasksMode } from "../tasksSlice";
import { useTasksDateRangeContext } from "../context/TasksDateRangeContext";
import { formatDate } from "../../../helpers/formatDate";

export function useGetTaskIds() {
  const { date } = useTasksDateRangeContext();
  const mode = useSelector(selectTasksMode);

  const tasks = useSelector((state) =>
    selectTaskIdsByDate(
      state,
      mode === "year" ? date.getFullYear() : formatDate(date),
    ),
  );

  return tasks;
}

import { useSelector } from "react-redux";
import { selectTaskIdsByDate, selectTasksMode } from "../tasksSlice";
import { useTasksDateContext } from "../context/TasksDateContext";
import moment from "moment";

export function useGetTaskIds() {
  const { date } = useTasksDateContext();
  const mode = useSelector(selectTasksMode);

  const tasks = useSelector((state) =>
    selectTaskIdsByDate(
      state,
      mode === "year" ? date.getFullYear() : moment(date).format("YYYY-MM-DD"),
    ),
  );

  return tasks;
}

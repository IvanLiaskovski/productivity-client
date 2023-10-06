import { useSelector } from "react-redux";
import { selectTaskIdsByDate, selectTasksMode } from "../tasksSlice";
import moment from "moment";

export function useGetTaskIds(date) {
  const mode = useSelector(selectTasksMode);

  const tasks = useSelector((state) =>
    selectTaskIdsByDate(
      state,
      mode === "year" ? date.getFullYear() : moment(date).format("YYYY-MM-DD"),
    ),
  );

  return tasks;
}

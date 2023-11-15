import { useSelector } from "react-redux";
import { selectTasksByDate, selectTasksMode } from "../tasksSlice";
import useCheckTasksURL from "./useCheckTasksURL";
import { createWeekDatesRange } from "../helpers/tasksHelpers";
import moment from "moment";

export function useGetTasks(date) {
  const mode = useSelector(selectTasksMode);
  const isWeek = useCheckTasksURL("week");

  if (isWeek) {
    date = createWeekDatesRange(date, true).slice(0, 7);
  } else {
    date = moment(date).format("YYYY-MM-DD");
  }

  const tasks = useSelector((state) =>
    selectTasksByDate(state, mode === "year" ? date.getFullYear() : date),
  );

  return tasks;
}

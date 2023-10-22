import { useSelector } from "react-redux";
import { selectTasksByDate, selectTasksMode } from "../tasksSlice";
import useCheckTasksURL from "./useCheckTasksURL";
import {
  createWeekDatesRange,
  createMonthDatesRange,
} from "../helpers/tasksHelpers";
import moment from "moment";

export function useGetTasks(date) {
  const mode = useSelector(selectTasksMode);
  const isWeek = useCheckTasksURL("week");
  const isMonth = useCheckTasksURL("month");

  if (isMonth) {
    date = createMonthDatesRange(date, true, false);
  } else if (isWeek) {
    date = createWeekDatesRange(date, true).slice(0, 7);
  } else {
    date = moment(date).format("YYYY-MM-DD");
  }

  const tasks = useSelector((state) =>
    selectTasksByDate(state, mode === "year" ? date.getFullYear() : date),
  );

  return tasks;
}

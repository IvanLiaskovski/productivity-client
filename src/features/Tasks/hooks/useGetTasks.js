import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectTasksByDate } from "../tasksSlice";
import useCheckTasksURL from "./useCheckTasksURL";
import {
  createWeekDatesRange,
  createMonthDatesRange,
} from "../helpers/tasksHelpers";
import moment from "moment";

export function useGetTasks(date) {
  const isWeek = useCheckTasksURL("week");
  const isMonth = useCheckTasksURL("month");
  const isYear = useCheckTasksURL("year");

  date = useMemo(() => {
    return isMonth
      ? createMonthDatesRange(date, true, false)
      : isWeek
      ? createWeekDatesRange(date, true).slice(7, 14)
      : isYear
      ? moment().format("YYYY")
      : moment(date).format("YYYY-MM-DD");
  });

  const tasks = useSelector((state) =>
    selectTasksByDate(state, date, isYear ? "year" : "day"),
  );

  return tasks;
}

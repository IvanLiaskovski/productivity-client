import { useGetTasksQuery } from "../../../api/api";
import { useSelector } from "react-redux";
import { selectTaskIdsByDate } from "../tasksSlice";
import moment from "moment";

export function useGetTaskIds(date, type) {
  date =
    type === "year"
      ? moment(date).format("YYYY")
      : moment(date).format("YYYY-MM-DD");

  /*const isLogin = true;

  const { isLoading } = useGetTasksQuery({
    view: "day",
    start: date,
    end: date,
  });*/

  const tasks = useSelector((state) => selectTaskIdsByDate(state, date, type));

  return tasks;
}

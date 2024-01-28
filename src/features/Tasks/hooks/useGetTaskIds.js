import { useSelector } from "react-redux";
import { selectTaskIdsByDate } from "../tasksSlice";
import moment from "moment";

export function useGetTaskIds(date, type) {
  date =
    type === "year"
      ? moment(date).format("YYYY")
      : moment(date).format("YYYY-MM-DD");

  const tasks = useSelector((state) => selectTaskIdsByDate(state, date, type));

  return { tasks };
}

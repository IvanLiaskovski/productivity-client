import { useGetTasksQuery } from "../../../api/api";
import { useCheckAuth } from "../../../context/AuthenticationContext";
import moment from "moment";

export function useFetchTasks(start, end, type) {
  const { isDemo, user } = useCheckAuth();
  const { isLoading, isError, error } = useGetTasksQuery(
    {
      start: type === "year" ? moment(start).format("YYYY") : start,
      end: type === "year" ? moment(end).format("YYYY") : end,
      view: type,
    },
    { skip: isDemo || !user },
  );

  return { isLoading, isError, error };
}
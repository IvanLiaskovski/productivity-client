import { useGetTasksQuery } from "../../../api/tasks/tasks";
import { useCheckAuth } from "../../../context/AuthenticationContext";
import moment from "moment";

export function useFetchTasks(start, end, type) {
  const { isDemo, user } = useCheckAuth();
  const { data, isLoading, isError, error } = useGetTasksQuery(
    {
      start: type === "year" ? moment(start).format("YYYY") : start,
      end: type === "year" ? moment(end).format("YYYY") : end,
      view: type,
    },
    { skip: isDemo || !user },
  );

  const nextPage = data?.getTasks?.nextPage;

  return { nextPage, isLoading, isError, error };
}

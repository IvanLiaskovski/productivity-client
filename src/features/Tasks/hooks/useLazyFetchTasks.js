import { useLazyGetTasksQuery } from "../../../api/tasks/tasks";
import moment from "moment";

export function useLazyFetchTasks(start, end, type) {
  const [trigger, result] = useLazyGetTasksQuery();

  function fetchTasks(page) {
    trigger({
      start: type === "year" ? moment(start).format("YYYY") : start,
      end: type === "year" ? moment(end).format("YYYY") : end,
      view: type,
      page,
    });
  }

  const isLoading = result.isLoading;
  const isError = result.isError;
  const error = result.error;
  const nextPage = result?.data?.getTasks?.nextPage;

  return { fetchTasks, isLoading, isError, nextPage, error };
}

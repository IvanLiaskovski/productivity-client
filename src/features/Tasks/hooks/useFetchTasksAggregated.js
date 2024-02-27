import { useGetTasksAggregatedQuery } from "../../../api/tasks/tasks";
import { useCheckAuth } from "../../../context/AuthenticationContext";
import { retrieveAggregatedData } from "../helpers/tasksHelpers";
import moment from "moment";

export function useFetchTasksAggregated(start, end, type) {
  const { isDemo, user } = useCheckAuth();
  const { data, isLoading, isError, error } = useGetTasksAggregatedQuery(
    {
      start:
        type === "year"
          ? moment(start).format("YYYY")
          : moment(start).format("YYYY-MM-DD"),
      end:
        type === "year"
          ? moment(end).format("YYYY")
          : moment(end).format("YYYY-MM-DD"),
      view: type,
    },
    { skip: isDemo || !user },
  );

  const paginationDataArray = data?.getTasks?.tasks?.map(
    ({ date, page, nextPage }) => ({ date, page, nextPage }),
  );
  const aggregatedData = retrieveAggregatedData(paginationDataArray);

  return { aggregatedData, isLoading, isError, error };
}

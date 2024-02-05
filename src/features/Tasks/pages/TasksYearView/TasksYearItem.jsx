import { Suspense, lazy } from "react";
import Loading from "../../components/TasksDayList/Loading";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useFetchTasks } from "../../hooks/useFetchTasks";
const TasksDayList = lazy(() =>
  import("../../components/TasksDayList/TasksDayList"),
);

const TasksYearItem = () => {
  const { date } = useTasksDateContext();
  const { isLoading, isError, error } = useFetchTasks(date, date, "year");

  return (
    <Suspense fallback={<Loading />}>
      <TasksDayList
        tasksType="year"
        tasksDate={date}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </Suspense>
  );
};

export default TasksYearItem;

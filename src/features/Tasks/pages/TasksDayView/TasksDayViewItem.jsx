import TasksDayList from "../../components/TasksDayList/TasksDayList";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useFetchTasks } from "../../hooks/useFetchTasks";

const TasksDayViewItem = () => {
  const { date } = useTasksDateContext();
  const { nextPage, isLoading, isError, error } = useFetchTasks(
    date,
    date,
    "day",
  );

  return (
    <TasksDayList
      tasksDate={date}
      isLoading={isLoading}
      nextPage={nextPage}
      isError={isError}
      error={error}
    />
  );
};

export default TasksDayViewItem;

import { Suspense, lazy } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import TaskCreationPanel from "../../components/TaskCreationPanel/TaskCreationPanel";

const TasksDayList = lazy(() => import("../TasksDayView/TasksDayList"));
import Loading from "../TasksDayView/Loading";

const TasksYearView = () => {
  const { date } = useTasksDateContext();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <TasksDayList tasksType="year" tasksDate={date} />
      </Suspense>
      <TaskCreationPanel taskType="year" />
    </>
  );
};

export default TasksYearView;

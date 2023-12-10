import { Suspense, lazy } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import TaskCreationPanel from "../../components/TaskCreationPanel/TaskCreationPanel";

const TasksDayList = lazy(() => import("./TasksDayList"));
const TasksWeekSlider = lazy(() =>
  import("../../components/TasksWeekSlider/TasksWeekSlider"),
);
const SlideDayItem = lazy(() =>
  import("../../components/TasksWeekSlider/SlideItems/SlideDayItem"),
);
import Loading from "../../components/TasksWeekSlider/Loading";
import ListLoading from "./Loading";

function TasksDayView() {
  const { date } = useTasksDateContext();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <TasksWeekSlider SlideItem={SlideDayItem} />
      </Suspense>
      <Suspense fallback={<ListLoading />}>
        <TasksDayList tasksDate={date} />
      </Suspense>
      <TaskCreationPanel />
    </>
  );
}

export default TasksDayView;

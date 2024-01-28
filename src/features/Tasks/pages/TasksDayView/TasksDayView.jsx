import { Suspense, lazy } from "react";
import TaskCreationPanel from "../../components/TaskCreationPanel/TaskCreationPanel";

const TasksDayViewItem = lazy(() => import("./TasksDayViewItem"));
const TasksWeekSlider = lazy(() =>
  import("../../components/TasksWeekSlider/TasksWeekSlider"),
);
const SlideDayItem = lazy(() =>
  import("../../components/TasksWeekSlider/SlideItems/SlideDayItem"),
);
import Loading from "../../components/TasksWeekSlider/Loading";
import ListLoading from "../../components/TasksDayList/Loading";

function TasksDayView() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TasksWeekSlider SlideItem={SlideDayItem} />
      </Suspense>
      <Suspense fallback={<ListLoading />}>
        <TasksDayViewItem />
      </Suspense>
      <TaskCreationPanel />
    </>
  );
}

export default TasksDayView;

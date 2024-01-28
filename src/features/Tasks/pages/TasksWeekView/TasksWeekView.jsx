import { Suspense, lazy } from "react";
import TasksWeekItemGroup from "./TasksWeekItemGroup";

const TasksWeekSlider = lazy(() =>
  import("../../components/TasksWeekSlider/TasksWeekSlider"),
);
const SlideWeekItem = lazy(() =>
  import("../../components/TasksWeekSlider/SlideItems/SlideWeekItem"),
);
import Loading from "../../components/TasksWeekSlider/Loading";

const TasksWeekView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TasksWeekSlider SlideItem={SlideWeekItem} />
      </Suspense>
      <TasksWeekItemGroup />
    </>
  );
};

export default TasksWeekView;

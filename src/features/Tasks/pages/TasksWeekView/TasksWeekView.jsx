import { Suspense, lazy } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksWeekItemGroup from "./TasksWeekItemGroup";

const TasksWeekSlider = lazy(() =>
  import("../../components/TasksWeekSlider/TasksWeekSlider"),
);
const SlideWeekItem = lazy(() =>
  import("../../components/TasksWeekSlider/SlideItems/SlideWeekItem"),
);
import Loading from "../../components/TasksWeekSlider/Loading";

const TasksWeekView = () => {
  const { date } = useTasksDateContext();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <TasksWeekSlider SlideItem={SlideWeekItem} />
      </Suspense>
      <TasksWeekItemGroup datesRange={date} />
    </>
  );
};

export default TasksWeekView;

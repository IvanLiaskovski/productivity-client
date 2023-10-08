import TasksDayList from "./TasksDayList";
import CreateTaskPanel from "../CreateTaskPanel/CreateTaskPanel";
import TasksWeekSlider from "../TasksTermModes/TasksWeekSlider";
import SlideDayItem from "../TasksTermModes/SlideItems/SlideDayItem";

function TasksDayView() {
  return (
    <>
      <TasksWeekSlider SlideItem={SlideDayItem} />
      <TasksDayList />
      <CreateTaskPanel />
    </>
  );
}

export default TasksDayView;

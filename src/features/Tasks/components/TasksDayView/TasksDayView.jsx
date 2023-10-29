import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksDayList from "./TasksDayList";
import CreateTaskPanel from "../CreateTaskPanel/CreateTaskPanel";
import TasksWeekSlider from "../TasksTermModes/TasksWeekSlider";
import SlideDayItem from "../TasksTermModes/SlideItems/SlideDayItem";

function TasksDayView() {
  const { date } = useTasksDateContext();

  return (
    <>
      <TasksWeekSlider SlideItem={SlideDayItem} />
      <TasksDayList tasksDate={date} />
      <CreateTaskPanel />
    </>
  );
}

export default TasksDayView;

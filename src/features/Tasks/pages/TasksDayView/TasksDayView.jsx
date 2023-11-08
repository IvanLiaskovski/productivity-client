import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksDayList from "./TasksDayList";
import TaskCreationPanel from "../../components/TaskCreationPanel/TaskCreationPanel";
import TasksWeekSlider from "../../components/TasksWeekSlider/TasksWeekSlider";
import SlideDayItem from "../../components/TasksWeekSlider/SlideItems/SlideDayItem";

function TasksDayView() {
  const { date } = useTasksDateContext();

  return (
    <>
      <TasksWeekSlider SlideItem={SlideDayItem} />
      <TasksDayList tasksDate={date} />
      <TaskCreationPanel />
    </>
  );
}

export default TasksDayView;

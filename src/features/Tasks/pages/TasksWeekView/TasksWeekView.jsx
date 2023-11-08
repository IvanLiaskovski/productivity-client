import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksWeekItemGroup from "./TasksWeekItemGroup";
import TasksWeekSlider from "../../components/TasksWeekSlider/TasksWeekSlider";
import SlideWeekItem from "../../components/TasksWeekSlider/SlideItems/SlideWeekItem";

const TasksWeekView = () => {
  const { date } = useTasksDateContext();

  return (
    <>
      <TasksWeekSlider SlideItem={SlideWeekItem} />
      <TasksWeekItemGroup datesRange={date} />
    </>
  );
};

export default TasksWeekView;

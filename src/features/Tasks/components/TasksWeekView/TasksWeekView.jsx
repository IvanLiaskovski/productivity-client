import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksWeekItemGroup from "./TasksWeekItemGroup";
import TasksWeekSlider from "../TasksTermModes/TasksWeekSlider";
import SlideWeekItem from "../TasksTermModes/SlideItems/SlideWeekItem";

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

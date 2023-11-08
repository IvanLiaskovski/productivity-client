import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksDayList from "../TasksDayView/TasksDayList";
import TaskCreationPanel from "../../components/TaskCreationPanel/TaskCreationPanel";
const TasksYearView = () => {
  const { date } = useTasksDateContext();

  return (
    <>
      <TasksDayList tasksType="year" tasksDate={date} />
      <TaskCreationPanel taskType="year" />
    </>
  );
};

export default TasksYearView;

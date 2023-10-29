import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksDayList from "../TasksDayView/TasksDayList";
import CreateTaskPanel from "../CreateTaskPanel/CreateTaskPanel";
const TasksYearView = () => {
  const { date } = useTasksDateContext();

  return (
    <>
      <TasksDayList tasksType="year" tasksDate={date} />
      <CreateTaskPanel taskType="year" />
    </>
  );
};

export default TasksYearView;

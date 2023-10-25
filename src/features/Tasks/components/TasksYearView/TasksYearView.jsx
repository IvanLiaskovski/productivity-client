import { useTasksDateContext } from "../../context/TasksDateContext";
import TaskYearPicker from "../TaskDatePicker/TaskYearPicker";
import TasksDayList from "../TasksDayView/TasksDayList";
import CreateTaskPanel from "../CreateTaskPanel/CreateTaskPanel";
import MoveYearBtnGroup from "./MoveYearBtnGroup";

const TasksYearView = () => {
  const { date } = useTasksDateContext();

  return (
    <>
      <div>
        <TaskYearPicker />
        <MoveYearBtnGroup />
      </div>
      <TasksDayList tasksType="year" tasksDate={date} />
      <CreateTaskPanel taskType="year" />
    </>
  );
};

export default TasksYearView;

import TasksYearItem from "./TasksYearItem";
import TaskCreationPanel from "../../components/TaskCreationPanel/TaskCreationPanel";

const TasksYearView = () => {
  return (
    <>
      <TasksYearItem />
      <TaskCreationPanel taskType="year" />
    </>
  );
};

export default TasksYearView;

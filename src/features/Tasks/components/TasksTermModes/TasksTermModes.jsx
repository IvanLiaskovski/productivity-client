import { useSelector } from "react-redux";
import { selectTasksMode } from "../../tasksSlice";

import TasksDaySlider from "./TasksDaySlider";
import TasksYearSwitch from "./TasksYearSwitch";

const TasksTermModes = () => {
  const taskMode = useSelector(selectTasksMode);

  return taskMode === "year" ? <TasksYearSwitch /> : <TasksDaySlider />;
};

export default TasksTermModes;

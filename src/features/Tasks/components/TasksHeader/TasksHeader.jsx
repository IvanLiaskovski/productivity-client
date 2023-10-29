import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import TasksHeaderControls from "./TasksHeaderControls";
import ProductivityBar from "../ProductivityBar/ProductivityBar";
import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";
import MoveTasksDateBtnGroup from "./MoveTasksDateBtnGroup";

const TasksHeader = () => {
  const isScreenNotLarge = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="mt-10 flex justify-between">
      <TasksHeaderControls />
      <ProductivityBar />
      {isScreenNotLarge ? <ActiveTasksSwitch /> : <MoveTasksDateBtnGroup />}
    </div>
  );
};

export default TasksHeader;

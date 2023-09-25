import { useMediaQuery } from "react-responsive";
import TasksHeaderControls from "./TasksHeaderControls";
import ProductivityBar from "../ProductivityBar/ProductivityBar";
import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";

const TasksHeader = () => {
  const isScreenNotLarge = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <TasksHeaderControls />
      <ProductivityBar />
      {isScreenNotLarge && <ActiveTasksSwitch />}
    </>
  );
};

export default TasksHeader;

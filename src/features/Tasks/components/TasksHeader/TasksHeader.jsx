import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import TasksHeaderControls from "./TasksHeaderControls";
import ProductivityBar from "../ProductivityBar/ProductivityBar";
import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";

const TasksHeader = () => {
  const isScreenNotLarge = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMonth = useCheckTasksURL("month");

  return (
    <>
      {!isMonth && <TasksHeaderControls />}
      <ProductivityBar />
      {isScreenNotLarge && <ActiveTasksSwitch />}
    </>
  );
};

export default TasksHeader;

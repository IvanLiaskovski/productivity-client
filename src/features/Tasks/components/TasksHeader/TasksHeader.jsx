import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import TasksHeaderControls from "./TasksHeaderControls";
import ProductivityBar from "../ProductivityBar/ProductivityBar";
import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";
import MoveTasksDateBtnGroup from "./MoveTasksDateBtnGroup";

const TasksHeader = () => {
  const isScreenNotMedium = useMediaQuery({ query: "(max-width: 724px)" });
  const isMonthOrYear = useCheckTasksURL(["month", "year"]);

  return (
    <div className="mt-10 flex flex-col justify-between lg:flex-row">
      <TasksHeaderControls />
      <ProductivityBar />
      {isScreenNotMedium ? (
        <ActiveTasksSwitch />
      ) : isMonthOrYear ? (
        <MoveTasksDateBtnGroup />
      ) : null}
    </div>
  );
};

export default TasksHeader;

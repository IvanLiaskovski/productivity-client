import PropTypes from "prop-types";
import { useUnDoTask } from "../../hooks/useUnDoTask";
import { useMediaQuery } from "react-responsive";
import TaskContent from "./TaskContent";
import PriorityMark from "../Priority/PriorityMark";
import TaskUnDo from "./TaskUnDo";

const TaskCompleted = ({ taskId, name, priority }) => {
  const isScreenSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const unDoTask = useUnDoTask(taskId);

  const unDoTaskHandle = () => {
    if (isScreenSmall) {
      unDoTask();
    }
  };
  return (
    <div onClick={unDoTaskHandle} className="group cursor-pointer">
      <TaskContent taskId={taskId} name={name} />
      <PriorityMark priority={priority} isCompleted />
      {!isScreenSmall && <TaskUnDo taskId={taskId} />}
    </div>
  );
};

TaskCompleted.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  priority: PropTypes.string,
};

export default TaskCompleted;

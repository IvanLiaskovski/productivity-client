import PropTypes from "prop-types";
import TaskContent from "./TaskContent";
import PriorityMark from "../Priority/PriorityMark";

const TaskCompleted = ({ content, priority }) => {
  return (
    <div className="px-8 py-2">
      <TaskContent content={content} />
      <PriorityMark priority={priority} isCompleted />
    </div>
  );
};

TaskCompleted.propTypes = {
  content: PropTypes.string,
  priority: PropTypes.string,
};

export default TaskCompleted;

import PropTypes from "prop-types";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import PriorityMark from "../Priority/PriorityMark";
import TaskActions from "./TaskActions";
import TaskSlideActions from "./TaskSlideActions";
import TaskContent from "./TaskContent";

const TaskActive = ({ taskId, content, priority, setOpen }) => {
  const isScreenLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const [isActionStart, setActionStart] = useState(false);

  const openTaskHandle = (e) => {
    if (e.target.closest("#task-actions")) return;
    setOpen(taskId);
  };

  return (
    <div
      className="group/actions relative cursor-pointer px-8 py-2"
      onClick={openTaskHandle}
    >
      <TaskSlideActions taskId={taskId}>
        <TaskContent content={content} />
        <PriorityMark priority={priority} />
      </TaskSlideActions>
      {isScreenLarge && (
        <TaskActions
          taskId={taskId}
          isActionStart={isActionStart}
          setActionStart={setActionStart}
        />
      )}
    </div>
  );
};

TaskActive.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  priority: PropTypes.string,
  onToggle: PropTypes.func,
  setOpen: PropTypes.func,
};

export default TaskActive;

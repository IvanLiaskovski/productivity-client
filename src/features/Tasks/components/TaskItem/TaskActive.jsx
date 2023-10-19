import PropTypes from "prop-types";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

import PriorityMark from "../Priority/PriorityMark";
import TaskActions from "./TaskActions";
import TaskSlideActions from "./TaskSlideActions";
import TaskContent from "./TaskContent";

const TaskActive = ({ taskId, content, priority, hideActions, setOpen }) => {
  const isScreenMedium = useMediaQuery({ query: "(min-width: 768px)" });

  const [isActionStart, setActionStart] = useState(false);
  const styles = twMerge("group/actions relative cursor-pointer");

  const openTaskHandle = (e) => {
    if (e.target.closest("#task-actions")) return;
    setOpen(taskId);
  };

  return (
    <div className={styles} onClick={openTaskHandle}>
      <TaskSlideActions taskId={taskId}>
        <TaskContent taskId={taskId} content={content} />
        <PriorityMark taskId={taskId} priority={priority} />
      </TaskSlideActions>
      {isScreenMedium && !hideActions && (
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
  hideActions: PropTypes.string,
  setOpen: PropTypes.func,
};

export default TaskActive;

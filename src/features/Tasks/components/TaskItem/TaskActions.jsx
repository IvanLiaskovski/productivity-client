import PropTypes from "prop-types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import CompleteTaskBtn from "../Buttons/CompleteTaskBtn";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";

const TaskActions = ({ taskId }) => {
  const [isActionStart, setActionStart] = useState(false);

  const wrapperStyles = twMerge(
    "absolute right-5 top-0 flex h-3/4 max-h-8 w-16 -translate-y-full justify-center gap-1 rounded-b-2xl bg-bgTop transition-transform duration-300 group-hover:translate-y-0",
    isActionStart ? "z-0" : "z-20",
  );

  const handleStartAction = () => {
    setActionStart(true);
  };

  return (
    <div id="task-actions" className={wrapperStyles}>
      <CompleteTaskBtn
        taskId={taskId}
        startAction={handleStartAction}
        isActionStart={isActionStart}
      />
      <DeleteTaskBtn
        taskId={taskId}
        startAction={handleStartAction}
        isActionStart={isActionStart}
      />
    </div>
  );
};

TaskActions.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TaskActions;

import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

import CompleteTaskBtn from "../Buttons/CompleteTaskBtn";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";

const TaskActions = ({ taskId, isActionStart, setActionStart, isEdit }) => {
  const isScreenSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const isAlwaysVisible = isScreenSmall && isEdit;

  const wrapperStyles = twMerge(
    "absolute right-5 top-0 flex h-3/4 max-h-8 w-16 -translate-y-full justify-center gap-1 rounded-b-2xl bg-bgTop transition-transform duration-300 group-hover/actions:translate-y-0",
    isActionStart ? "z-0 !-translate-y-full" : "z-20",
    isAlwaysVisible && "!translate-y-0",
  );

  const handleStartAction = () => {
    setActionStart(true);
  };

  return (
    <div data-testid="task-actions" id="task-actions" className={wrapperStyles}>
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
  isActionStart: PropTypes.bool,
  setActionStart: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default TaskActions;

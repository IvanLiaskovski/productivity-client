import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";

import CompleteTaskBtn from "../Buttons/CompleteTaskBtn";
import DeleteTaskBtn from "../Buttons/DeleteTaskBtn";

const TaskActions = ({
  taskId,
  isActionStart,
  setActionStart,
  onAfterAction,
  isEdit,
}) => {
  const isScreenSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const isAlwaysVisible = isScreenSmall && isEdit;
  const isWeek = useCheckTasksURL("week");
  const isMonth = useCheckTasksURL("month");

  const wrapperStyles = twMerge(
    "absolute top-0 flex h-3/4 -translate-y-full justify-center gap-1 bg-bgTop transition-transform duration-300 group-hover/actions:translate-y-0",
    isActionStart ? "z-0 !-translate-y-full" : "z-20",
    isAlwaysVisible && "!translate-y-0",
    isWeek | isMonth
      ? "right-3 max-h-5 w-12 rounded-b-xl"
      : "right-5 max-h-8 w-16 rounded-b-2xl",
  );

  const handleStartAction = () => {
    setActionStart(true);
  };

  return (
    <div data-testid="task-actions" id="task-actions" className={wrapperStyles}>
      <CompleteTaskBtn
        taskId={taskId}
        startAction={handleStartAction}
        onAfterAction={onAfterAction}
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
  onAfterAction: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default TaskActions;

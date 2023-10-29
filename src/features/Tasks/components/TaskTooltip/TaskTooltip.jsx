import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Tooltip } from "react-tooltip";

const TaskTooltip = ({ taskId, className }) => {
  const styles = twMerge("z-50 w-full max-w-sm break-words", className);

  return <Tooltip className={styles} id={`tooltip-${taskId}`} />;
};

TaskTooltip.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default TaskTooltip;

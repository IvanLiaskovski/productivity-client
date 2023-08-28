import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { PRIORITY_COLORS } from "../../../../data/priorityData";

const PriorityMark = ({
  priority = "common",
  isCompleted,
  circleClassName,
  className,
}) => {
  const priorityMarkStyles = twMerge(
    "absolute inline-flex h-full w-full rounded-full opacity-75",
    !isCompleted ? "animate-ping" : "",
    PRIORITY_COLORS.bg[priority],
    className,
  );

  const priorityMarkCircleStyles = twMerge(
    "relative inline-flex  h-3 w-3 rounded-full",
    PRIORITY_COLORS.bg[priority],
    circleClassName,
  );

  return (
    <span className="absolute left-3 top-1/2 z-10 flex h-3 w-3 -translate-y-1/2">
      <span className={priorityMarkStyles}></span>
      <span className={priorityMarkCircleStyles}></span>
    </span>
  );
};

PriorityMark.propTypes = {
  priority: PropTypes.oneOf(Object.keys(PRIORITY_COLORS.bg)),
  isCompleted: PropTypes.bool,
  circleClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
};

export default PriorityMark;

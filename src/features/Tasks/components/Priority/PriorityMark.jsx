import PropTypes from "prop-types";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { twMerge } from "tailwind-merge";
import { PRIORITY_COLORS } from "../../../../data/priorityData";

const PriorityMark = ({
  priority = "common",
  isCompleted,
  circleClassName,
  className,
}) => {
  const isWeek = useCheckTasksURL("week");

  const wrapperStyles = twMerge(
    "absolute  top-1/2 z-10 flex -translate-y-1/2",
    isWeek
      ? "left-[3px] xl:left-1 h-1.5 w-1.5 lg:h-2 lg:w-2"
      : "left-3 h-3 w-3",
  );

  const priorityMarkStyles = twMerge(
    "absolute inline-flex h-full w-full rounded-full opacity-75",
    !isCompleted ? "animate-ping" : "",
    PRIORITY_COLORS.bg[priority],
    className,
  );

  const priorityMarkCircleStyles = twMerge(
    "relative inline-flex h-1.5 w-1.5 lg:h-3 lg:w-3 rounded-full",
    isWeek && "lg:h-2 lg:w-2",
    PRIORITY_COLORS.bg[priority],
    circleClassName,
  );

  return (
    <span className={wrapperStyles}>
      <span className={priorityMarkStyles} data-testid="priority-mark"></span>
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

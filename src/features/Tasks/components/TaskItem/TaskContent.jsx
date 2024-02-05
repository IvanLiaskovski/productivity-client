import PropTypes from "prop-types";
import { memo } from "react";
import { twMerge } from "tailwind-merge";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

const TaskContent = memo(({ taskId, name = "..." }) => {
  const isMonthOrWeek = useCheckTasksURL(["month", "week"]);

  const styles = twMerge(
    "box relative z-20 line-clamp-3 text-ellipsis whitespace-break-spaces break-words bg-transparent font-sans overflow-hidden",
    isMonthOrWeek
      ? "px-3 xl:px-4 md:py-1  md:text-xs xl:text-base"
      : "px-8 py-2",
  );

  return (
    <AppearAnimation className="relative z-10" animationType="slideDown" reset>
      <pre
        className={styles}
        data-tooltip-id={`tooltip-${taskId}`}
        data-tooltip-name={name}
        data-tooltip-place="bottom-end"
        data-tooltip-position-strategy="absolute"
        data-tooltip-float={true}
        data-tooltip-hidden={!isMonthOrWeek}
        data-tooltip-delay-show={500}
      >
        {name}
      </pre>
    </AppearAnimation>
  );
});

TaskContent.displayName = "TaskContent";

TaskContent.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
};

export default TaskContent;

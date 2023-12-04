import PropTypes from "prop-types";
import { memo } from "react";
import { twMerge } from "tailwind-merge";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

const TaskContent = memo(({ taskId, name = "..." }) => {
  const isMonthOrWeek = useCheckTasksURL(["month", "week"]);
  const isScreenSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const isScreenMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isScreenLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const styles = twMerge(
    "relative z-20 break-words whitespace-break-spaces bg-transparent font-sans",
    isMonthOrWeek
      ? "px-3 xl:px-4 md:py-1 xl:py-2 md:text-xs xl:text-base"
      : "px-8 py-2",
  );

  const nameValue =
    isScreenLarge && isMonthOrWeek && name.length > 52
      ? `${String(name).slice(0, 52)}...`
      : !isScreenLarge && isMonthOrWeek && name.length > 12
      ? `${String(name).slice(0, 12)}...`
      : name.length > 172
      ? `${String(name).slice(0, 172)}...`
      : name;

  const hideTooltip = (name === nameValue && isScreenMedium) || isScreenSmall;

  return (
    <AppearAnimation className="relative z-10" animationType="slideDown" reset>
      <pre
        className={styles}
        data-tooltip-id={`tooltip-${taskId}`}
        data-tooltip-name={name}
        data-tooltip-place="bottom-end"
        data-tooltip-position-strategy="absolute"
        data-tooltip-float={true}
        data-tooltip-hidden={hideTooltip}
        data-tooltip-delay-show={500}
      >
        {nameValue}
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

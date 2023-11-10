import PropTypes from "prop-types";
import { memo } from "react";
import { twMerge } from "tailwind-merge";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

const TaskContent = memo(({ taskId, content = "..." }) => {
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

  const contentValue =
    isScreenLarge && isMonthOrWeek && content.length > 52
      ? `${String(content).slice(0, 52)}...`
      : !isScreenLarge && isMonthOrWeek && content.length > 12
      ? `${String(content).slice(0, 12)}...`
      : content.length > 172
      ? `${String(content).slice(0, 172)}...`
      : content;

  const hideTooltip =
    (content === contentValue && isScreenMedium) || isScreenSmall;

  return (
    <AppearAnimation className="relative z-10" animationType="slideDown" reset>
      <pre
        className={styles}
        data-tooltip-id={`tooltip-${taskId}`}
        data-tooltip-content={content}
        data-tooltip-place="bottom-end"
        data-tooltip-position-strategy="absolute"
        data-tooltip-float={true}
        data-tooltip-hidden={hideTooltip}
        data-tooltip-delay-show={500}
      >
        {contentValue}
      </pre>
    </AppearAnimation>
  );
});

TaskContent.displayName = "TaskContent";

TaskContent.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  content: PropTypes.string,
};

export default TaskContent;

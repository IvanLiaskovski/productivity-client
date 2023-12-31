import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

const TaskContent = ({ taskId, content = "..." }) => {
  const isWeek = useCheckTasksURL("week");
  const isScreenSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const isScreenMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isScreenLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const styles = twMerge(
    "relative z-20 break-words whitespace-break-spaces bg-transparent font-sans",
    isWeek ? "px-3 xl:px-4 md:py-1 xl:py-2 md:text-xs xl:text-sm" : "px-8 py-2",
  );

  const contentValue =
    isScreenLarge && isWeek && content.length > 52
      ? `${String(content).slice(0, 52)}...`
      : !isScreenLarge && isWeek && content.length > 12
      ? `${String(content).slice(0, 12)}...`
      : content.length > 172
      ? `${String(content).slice(0, 172)}...`
      : content;

  const hideTultip =
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
        data-tooltip-hidden={hideTultip}
        data-tooltip-delay-show={500}
      >
        {contentValue}
      </pre>
    </AppearAnimation>
  );
};

TaskContent.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  content: PropTypes.string,
};

export default TaskContent;

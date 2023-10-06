import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useMediaQuery } from "react-responsive";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

const TaskContent = ({ content = "..." }) => {
  const isWeek = useCheckTasksURL("week");
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

  return (
    <AppearAnimation className="relative z-10" animationType="slideDown" reset>
      <pre className={styles}>{contentValue}</pre>
    </AppearAnimation>
  );
};

TaskContent.propTypes = {
  content: PropTypes.string,
};

export default TaskContent;

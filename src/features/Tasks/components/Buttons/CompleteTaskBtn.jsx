import PropTypes from "prop-types";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { useSpring, animated } from "react-spring";
import useTaskComplete from "../../hooks/useTaskComplete";
import TaskActionBtn from "./TaskActionBtn";
import { MdDone } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const CompleteTaskBtn = ({
  taskId,
  startAction = () => false,
  onAfterAction = () => false,
  isActionStart,
}) => {
  const completeTask = useTaskComplete(taskId);
  const isMonthOrWeek = useCheckTasksURL(["week", "month"]);

  const styles = twMerge(
    "relative -z-10 rounded-full bg-green-200 transition-colors duration-150",
    isMonthOrWeek ? "h-4 w-4" : "h-6 w-6",
    !isActionStart && "hover:bg-green-400",
  );

  const [springStyles, springApi] = useSpring(() => ({
    from: { transform: "scale(1)" },
    reset: true,
    onStart: startAction,
    onRest: () => {
      completeTask();
      onAfterAction();
    },
  }));

  const handleCompleteTask = () => {
    springApi.start({
      to: { transform: "scale(90)" },
    });
  };

  return (
    <animated.div
      className={styles}
      style={springStyles}
      data-testid="animation-wrapper"
    >
      <TaskActionBtn onClick={handleCompleteTask} isActionStart={isActionStart}>
        <MdDone />
      </TaskActionBtn>
    </animated.div>
  );
};

CompleteTaskBtn.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startAction: PropTypes.func,
  onAfterAction: PropTypes.func,
  isActionStart: PropTypes.bool,
};

export default CompleteTaskBtn;

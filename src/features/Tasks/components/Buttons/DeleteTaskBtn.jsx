import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import useTaskDelete from "../../hooks/useTaskDelete";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { twMerge } from "tailwind-merge";

import TaskActionBtn from "./TaskActionBtn";
import { RxCross2 } from "react-icons/rx";

const DeleteTaskBtn = ({ taskId, startAction, isActionStart }) => {
  const deleteTask = useTaskDelete(taskId);
  const isWeek = useCheckTasksURL("week");

  const styles = twMerge(
    "relative -z-10 rounded-full bg-red-300 transition-colors duration-150 hover:bg-red-400",
    isWeek ? "h-4 w-4" : "h-6 w-6",
  );

  const [springStyles, springApi] = useSpring(() => ({
    from: { transform: "scale(1)" },
    reset: true,
    config: { duration: 500 },
    onStart: startAction,
    onRest: () => deleteTask(),
  }));

  const handleDeleteTask = () => {
    springApi.start({
      to: { transform: "scale(99)" },
    });
  };

  return (
    <animated.div
      className={styles}
      style={springStyles}
      data-testid="animation-wrapper"
    >
      <TaskActionBtn onClick={handleDeleteTask} isActionStart={isActionStart}>
        <RxCross2 className="text-[14px] font-black text-bgTop" />
      </TaskActionBtn>
    </animated.div>
  );
};

DeleteTaskBtn.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startAction: PropTypes.func,
  isActionStart: PropTypes.bool,
};

export default DeleteTaskBtn;

import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import useTaskComplete from "../../hooks/useTaskComplete";

import TaskActionBtn from "./TaskActionBtn";
import { MdDone } from "react-icons/md";

const CompleteTaskBtn = ({ taskId, startAction, isActionStart }) => {
  const completeTask = useTaskComplete(taskId);

  const [springStyles, springApi] = useSpring(() => ({
    from: { transform: "scale(1)" },
    reset: true,
    onStart: startAction,
    onRest: completeTask,
  }));

  const handleCompleteTask = () => {
    springApi.start({
      to: { transform: "scale(99)" },
    });
  };

  return (
    <animated.div
      className="relative -z-10 h-6 w-6 rounded-full bg-green-200 transition-colors duration-150 hover:bg-green-400"
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
  isActionStart: PropTypes.bool,
};

export default CompleteTaskBtn;

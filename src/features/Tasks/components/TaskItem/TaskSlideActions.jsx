import PropTypes from "prop-types";
import { useTaskSlideActions } from "../../hooks/useTaskSlideActions";
import { useSpring, animated } from "react-spring";

import { SLIDE_ACTIONS } from "../../../../data/actionsData";
import { SLIDE_ACTIONS_COLORS } from "../../../../data/actionsData";

const TaskSlideActions = ({ taskId, children }) => {
  const [
    progress,
    action,
    handleInteractionStart,
    handleInteractionEnd,
    handleInteractionMove,
  ] = useTaskSlideActions(taskId);

  const slideActionsAnimation = useSpring({
    backgroundColor:
      action === SLIDE_ACTIONS.complete
        ? SLIDE_ACTIONS_COLORS.complete
        : SLIDE_ACTIONS_COLORS.delete,
    opacity: progress,
    config: { tension: 200, friction: 10 },
  });

  return (
    <div
      onTouchMove={handleInteractionMove}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchCancel={handleInteractionEnd}
    >
      <animated.div
        className="task-shadow absolute left-0 top-0 h-full w-full "
        style={{
          ...slideActionsAnimation,
        }}
      />
      {children}
    </div>
  );
};

TaskSlideActions.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TaskSlideActions;

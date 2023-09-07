import PropTypes from "prop-types";

const TaskActionBtn = ({ onClick, isActionStart, children }) => {
  return (
    <button
      className="relative -z-10 flex h-full w-full items-center justify-center rounded-full"
      onClick={onClick}
    >
      {!isActionStart && children}
    </button>
  );
};

TaskActionBtn.propTypes = {
  onClick: PropTypes.func,
  isActionStart: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TaskActionBtn;

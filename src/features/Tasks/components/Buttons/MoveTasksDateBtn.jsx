import PropTypes from "prop-types";
import useMoveDate from "../../hooks/useMoveDate";
import { twMerge } from "tailwind-merge";

const MoveTasksDateBtn = ({ moveBy, moveByUnit, className, children }) => {
  const moveMonthForward = useMoveDate();

  const styles = twMerge(
    "bg-block p-2 rounded text-blue-100 shadow-md text-xl m-1 hover:bg-blue-500 transition-colors",
    className,
  );

  const handleMoveMonth = () => {
    moveMonthForward(moveBy, true, moveByUnit);
  };

  return (
    <button onClick={handleMoveMonth} className={styles}>
      {children}
    </button>
  );
};

MoveTasksDateBtn.propTypes = {
  moveBy: PropTypes.number,
  moveByUnit: PropTypes.oneOf(["days", "weeks", "months", "years"]).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MoveTasksDateBtn;

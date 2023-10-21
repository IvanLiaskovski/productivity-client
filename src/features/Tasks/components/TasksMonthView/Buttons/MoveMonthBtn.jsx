import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const MoveMonthBtn = ({ onClick = () => false, className, children }) => {
  const styles = twMerge(
    "bg-block p-2 rounded text-blue-100 shadow-md text-xl m-1 hover:bg-blue-500 transition-colors",
    className,
  );

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

MoveMonthBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default MoveMonthBtn;

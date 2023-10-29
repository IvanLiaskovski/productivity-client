import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import { PRIORITY_COLORS } from "../../../../data/priorityData";

const PriorityBtn = ({
  isActive,
  priority = "common",
  setPriority,
  backgroundColor,
  className,
  children,
}) => {
  const styles = twMerge(
    "cursor-pointer rounded-lg border-2 p-2 text-lg fix-blurry hover:scale-110 transition-all duration-300",
    PRIORITY_COLORS.hover[priority],
    isActive ? PRIORITY_COLORS.border[priority] : "border-transparent",
    PRIORITY_COLORS.txt[priority],
    backgroundColor === "dark" ? "bg-block bg-opacity-90" : "bg-primary-200",
    className,
  );

  const setPriorityHandle = () => {
    setPriority(priority);
  };

  return (
    <button title={priority} className={styles} onClick={setPriorityHandle}>
      {children}
    </button>
  );
};

PriorityBtn.propTypes = {
  isActive: PropTypes.bool,
  priority: PropTypes.oneOf(Object.keys(PRIORITY_COLORS.txt)),
  setPriority: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PriorityBtn;

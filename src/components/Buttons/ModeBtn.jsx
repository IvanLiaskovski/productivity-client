import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const ModeBtn = ({ isActive, onClick, children }) => {
  const styles = twMerge(
    "flex cursor-pointer items-center justify-center  rounded-lg px-2 py-1  text-xl hover:opacity-80",
    isActive ? "text-blue-100 bg-blue-500" : "bg-primary-200 text-primary-900",
  );

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

ModeBtn.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModeBtn;

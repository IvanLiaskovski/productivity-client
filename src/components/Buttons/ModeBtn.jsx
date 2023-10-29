import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

const ModeBtn = ({ to, isActive, className, children }) => {
  const styles = twMerge(
    "flex cursor-pointer items-center justify-center  rounded-lg px-2 py-1  text-xl hover:opacity-80",
    isActive ? "text-blue-100 bg-blue-500" : "bg-primary-200 text-primary-900",
    className,
  );

  return (
    <NavLink to={to} className={styles}>
      {children}
    </NavLink>
  );
};

ModeBtn.propTypes = {
  to: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ModeBtn;

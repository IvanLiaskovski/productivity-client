import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const TasksNavItem = ({ title, url, className, children }) => {
  const styles = twMerge(
    "rounded-lg bg-blue-500 px-9 py-1 text-center text-blue-100 block hover:shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset] transition-shadow",
    className,
  );

  const setActiveStyles = ({ isActive }) =>
    isActive
      ? twMerge(styles, "shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]")
      : styles;

  return (
    <NavLink to={url} className={setActiveStyles} title={title}>
      {children}
    </NavLink>
  );
};

TasksNavItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TasksNavItem;

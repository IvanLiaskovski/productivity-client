import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavItem = ({ title, url, className, children }) => {
  const styles = twMerge(
    "p-6 background-main-type flex justify-center items-center rounded-t-2xl text-4xl border-b-4 md:w-full md:mt-4 md:rounded-2xl border-transparent",
    className,
  );

  const setActiveStyles = ({ isActive }) =>
    isActive ? twMerge(styles, "border-white") : styles;

  return (
    <NavLink to={url} className={setActiveStyles} title={title}>
      {children}
    </NavLink>
  );
};

NavItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavItem;

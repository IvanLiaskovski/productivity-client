import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const LogOutBtn = ({ onClick, className, children }) => {
  const styles = twMerge(
    "p-6 background-main-type flex justify-center items-center rounded-t-2xl text-4xl border-b-4 md:w-full md:mt-4 md:rounded-2xl border-transparent",
    className,
  );

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

LogOutBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LogOutBtn;

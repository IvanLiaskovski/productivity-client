import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ type = "button", onClick, className, children }) => {
  const styles = twMerge(
    `flex items-center justify-center rounded-lg border-transparent bg-blue-500 px-2 py-1 text-xl text-blue-50 md:mt-4 md:w-full`,
    className,
  );

  return (
    <button className={styles} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const CreateBtn = ({ onClick, className, children }) => {
  const styles = twMerge(
    "group flex items-center justify-center rounded-full border-8 border-bgBottom bg-blue-500 p-4",
    className,
  );

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

CreateBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CreateBtn;

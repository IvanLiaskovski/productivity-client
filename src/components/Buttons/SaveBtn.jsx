import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SaveBtn = ({ slideFrom, slideTo, onClick, className }) => {
  const styles = twMerge(
    "group relative flex items-center justify-center overflow-hidden rounded-3xl bg-blue-500 px-4 py-2 text-white transition-all duration-150 hover:bg-blue-400",
    className,
  );

  return (
    <button title="Save" className={styles} onClick={onClick}>
      <div className="transition-all duration-300 group-hover:-translate-y-10 group-hover:translate-x-10">
        {slideFrom}
      </div>
      <div className="absolute -translate-x-10 translate-y-10 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
        {slideTo}
      </div>
    </button>
  );
};

SaveBtn.propTypes = {
  slideFrom: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  slideTo: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SaveBtn;

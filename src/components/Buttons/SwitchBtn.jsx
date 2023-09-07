import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SwitchBtn = ({
  isActive,
  onClick,
  circleClassName,
  className,
  children,
}) => {
  const switchCircleWrapperStyles = twMerge(
    "w-full h-full transition-all",
    isActive ? "translate-x-[calc(100%-16px)]" : "",
    className,
  );

  const switchCircleStyles = twMerge(
    "duration-400 absolute h-4 w-4 rounded-full transition-all",
    isActive ? "bg-blue-300" : "bg-block",
    circleClassName,
  );

  return (
    <div className="bg-blo mb-2 mt-3 flex cursor-pointer items-center text-blue-100">
      <div>{children}</div>
      <button
        onClick={onClick}
        className=" relative ml-2 flex h-6 w-11 rounded-xl bg-bgBottom p-1"
      >
        <div className={switchCircleWrapperStyles}>
          <div className={switchCircleStyles}></div>
        </div>
      </button>
    </div>
  );
};

SwitchBtn.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  circleClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SwitchBtn;

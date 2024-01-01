import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const PickerInput = forwardRef(
  ({ value, onClick, className, children }, ref) => {
    const styles = twMerge(
      "relative !float-left !inline border-0 bg-transparent font-sans font-semibold outline-0",
      className,
    );

    return (
      <div
        className="cursor-pointer text-primary-100"
        onClick={onClick}
        ref={ref}
      >
        <div className={styles}>{value}</div>
        {children}
      </div>
    );
  },
);

PickerInput.displayName = "CustomDatePickerInput";

PickerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PickerInput;

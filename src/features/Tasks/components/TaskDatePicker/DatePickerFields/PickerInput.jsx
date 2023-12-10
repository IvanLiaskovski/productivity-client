import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { VscTriangleDown } from "react-icons/vsc";

const PickerInput = forwardRef(({ value, onClick, className }, ref) => {
  const styles = twMerge(
    "min-w-[100px] relative !float-left !inline border-0 bg-transparent font-sans font-semibold outline-0 rounded-md bg-block p-2 pr-10 shadow-md",
    className,
  );

  return (
    <div
      className="cursor-pointer text-primary-100"
      onClick={onClick}
      ref={ref}
    >
      <div className={styles}>{value}</div>
      <span className="-translatex-1/2 absolute right-4 top-1/2 z-50 -translate-y-1/2">
        <VscTriangleDown />
      </span>
    </div>
  );
});

PickerInput.displayName = "CustomDatePickerInput";

PickerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default PickerInput;

import PropTypes from "prop-types";
import { forwardRef } from "react";

const PickerInput = forwardRef(({ value, onClick, children }, ref) => (
  <div className="cursor-pointer text-primary-100" onClick={onClick} ref={ref}>
    <div className="relative !float-left !inline border-0 bg-transparent font-sans font-semibold outline-0">
      {value}
    </div>
    {children}
  </div>
));

PickerInput.displayName = "CustomDatePickerInput";

PickerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PickerInput;

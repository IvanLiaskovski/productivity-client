import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef(
  (
    {
      title,
      value,
      onChange,
      placeholder,
      autoFocus,
      isTransparent,
      mode,
      type = "text",
      className,
    },
    ref,
  ) => {
    const inputStyles = twMerge(
      "h-auto min-h-[40px] w-full p-2 overflow-hidden rounded-lg outline-none tansition-all duration-300",
      mode === "light"
        ? `bg-primary-200 text-primary-900 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]
           focus:shadow-[0px_-10px_16px_0px_rgba(0,0,0,0.4)_inset] placeholder:text-gray-500`
        : `bg-block bg-opacity-95 text-blue-100 shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.4)_inset] 
           focus:shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.4)_inset] placeholder:text-gray-300`,
      isTransparent ? "bg-transparent" : "",
      className,
    );

    const labelStyles = twMerge(
      mode === "light" ? "text-blue-100" : "text-primary-900",
    );

    const focusHandle = (e) => {
      e.currentTarget.setSelectionRange(
        e.currentTarget.value.length,
        e.currentTarget.value.length,
      );
    };

    return (
      <div className="text-left">
        <label className={labelStyles} htmlFor={`field-${title}`}>
          {title}
        </label>
        <input
          id={`field-${title}`}
          className={inputStyles}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={focusHandle}
          type={type}
          ref={ref}
        />
      </div>
    );
  },
);

Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  isTransparent: PropTypes.bool,
  mode: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "number",
    "email",
    "color",
    "range",
    "password",
  ]),
  className: PropTypes.string,
};

Input.displayName = "Textarea";

export default Input;

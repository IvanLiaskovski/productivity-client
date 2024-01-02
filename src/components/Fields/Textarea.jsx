import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Textarea = forwardRef(
  (
    {
      title,
      value,
      onChange,
      placeholder,
      autoFocus,
      isTransparent,
      mode,
      className,
    },
    ref,
  ) => {
    const textareaStyles = twMerge(
      "h-auto min-h-[40px] w-full p-2 resize-none overflow-hidden rounded-lg outline-none tansition-all duration-300",
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

    const heightFitContent = (e) => {
      e.target.style.height = e.target.scrollHeight + "px";
    };

    const setCursorOnEnd = (e) => {
      e.currentTarget.setSelectionRange(
        e.currentTarget.value.length,
        e.currentTarget.value.length,
      );
    };

    const focusHandle = (e) => {
      setCursorOnEnd(e);
      setTimeout(() => heightFitContent(e), 100);
    };

    return (
      <div className="text-left">
        <label className={labelStyles} htmlFor={`field-${title}`}>
          {title}
        </label>
        <textarea
          id={`field-${title}`}
          className={textareaStyles}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={focusHandle}
          onInput={heightFitContent}
          ref={ref}
        />
      </div>
    );
  },
);

Textarea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  isTransparent: PropTypes.bool,
  mode: PropTypes.string,
  className: PropTypes.string,
};

Textarea.displayName = "Textarea";

export default Textarea;

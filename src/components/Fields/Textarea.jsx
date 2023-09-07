import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Textarea = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      autoFocus,
      isTransparent,
      textColor,
      className,
    },
    ref,
  ) => {
    const styles = twMerge(
      "h-auto min-h-[40px] w-full resize-none overflow-hidden rounded-lg outline-none",
      isTransparent ? "bg-transparent" : "",
      textColor === "light" ? "text-blue-100" : "text-black",
      className,
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
      <textarea
        className={styles}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onFocus={focusHandle}
        onInput={heightFitContent}
        ref={ref}
      />
    );
  },
);

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  isTransparent: PropTypes.bool,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default Textarea;

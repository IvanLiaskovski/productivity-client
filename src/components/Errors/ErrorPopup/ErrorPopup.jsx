import React from "react";
import Button from "../../Buttons/Button";
import { RxCross2 } from "react-icons/rx";

const ErrorPopup = ({ children }) => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="rounded-xl bg-primary-200 p-3 text-center text-red-500 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500 p-3 text-blue-50">
        <RxCross2 size={64} />
      </div>
      <h2 className="text-3xl">Error</h2>
      <p className="text-lg">{children}</p>
      <Button
        onClick={reload}
        className="mx-auto max-w-[240px] bg-red-500 px-4 py-2 transition-all duration-300 hover:bg-red-400"
      >
        Try again
      </Button>
    </div>
  );
};

export default ErrorPopup;

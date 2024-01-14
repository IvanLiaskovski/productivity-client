import React from "react";
import Button from "../../../../components/Buttons/Button";
import { useAuth } from "../../../../context/AuthenticationContext";

const TryDemoButton = () => {
  const { tryDemo } = useAuth();

  return (
    <Button
      className="w-full rounded-md bg-gray-400 duration-150 hover:opacity-90"
      type="button"
      onClick={tryDemo}
    >
      Try Demo
    </Button>
  );
};

export default TryDemoButton;

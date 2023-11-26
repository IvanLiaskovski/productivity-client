import PropTypes from "prop-types";
import { useState, useContext, createContext } from "react";

const TasksManualDateChangeContext = createContext(false);

export const TasksManualDateChangeProvider = ({
  isManualTaskChange = false,
  children,
}) => {
  const [isManualChange, setManualChange] = useState(isManualTaskChange);

  return (
    <TasksManualDateChangeContext.Provider
      value={{ isManualChange, setManualChange }}
    >
      {children}
    </TasksManualDateChangeContext.Provider>
  );
};

TasksManualDateChangeProvider.propTypes = {
  isManualTaskChange: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useManualDateChangeContext() {
  return useContext(TasksManualDateChangeContext);
}

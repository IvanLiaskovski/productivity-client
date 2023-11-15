import PropTypes from "prop-types";
import { useContext, createContext } from "react";

const TasksManualDateChangeContext = createContext(false);

export const TasksManualDateChangeProvider = ({
  isManualChange = false,
  setManualChange,
  children,
}) => {
  return (
    <TasksManualDateChangeContext.Provider
      value={{ isManualChange, setManualChange }}
    >
      {children}
    </TasksManualDateChangeContext.Provider>
  );
};

TasksManualDateChangeProvider.propTypes = {
  isManualChange: PropTypes.bool,
  setManualChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useManualDateChangeContext() {
  return useContext(TasksManualDateChangeContext);
}

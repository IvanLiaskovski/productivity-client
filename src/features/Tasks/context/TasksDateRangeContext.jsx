import PropTypes from "prop-types";
import { useContext, createContext, useState } from "react";

const TasksDateRangeContext = createContext(new Date());

export const TasksDateRangeProvider = ({ value = new Date(), children }) => {
  const [date, setDate] = useState(value);

  return (
    <TasksDateRangeContext.Provider value={{ date, setDate }}>
      {children}
    </TasksDateRangeContext.Provider>
  );
};

TasksDateRangeProvider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useTasksDateRangeContext() {
  return useContext(TasksDateRangeContext);
}

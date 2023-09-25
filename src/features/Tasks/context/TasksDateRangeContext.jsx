import PropTypes from "prop-types";
import { useContext, createContext, useState } from "react";

const TasksDateRangeContext = createContext(new Date());

export const TasksDateRangeProvider = ({
  date = new Date(),
  setDate,
  children,
}) => {
  return (
    <TasksDateRangeContext.Provider value={{ date, setDate }}>
      {children}
    </TasksDateRangeContext.Provider>
  );
};

TasksDateRangeProvider.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setDate: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useTasksDateRangeContext() {
  return useContext(TasksDateRangeContext);
}

import PropTypes from "prop-types";
import { useState, useEffect, useContext, createContext } from "react";
import { useTasksDatesRangeContext } from "./TasksDatesRangeContext";
import { useLocation } from "react-router";
import moment from "moment";

const TasksDateContext = createContext(moment().format("YYYY-MM-DD"));

export const TasksDateProvider = ({
  taskDate = moment().format("YYYY-MM-DD"),
  children,
}) => {
  const [date, setDate] = useState(taskDate);
  const { setDatesRange } = useTasksDatesRangeContext();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setDatesRange(date);
  }, [path]);

  return (
    <TasksDateContext.Provider value={{ date, setDate }}>
      {children}
    </TasksDateContext.Provider>
  );
};

TasksDateProvider.propTypes = {
  taskDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useTasksDateContext() {
  return useContext(TasksDateContext);
}

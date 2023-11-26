import PropTypes from "prop-types";
import { useState, useContext, createContext } from "react";
import moment from "moment";

const TasksDatesRangeContext = createContext(moment().format("YYYY-MM-DD"));

export const TasksDatesRangeProvider = ({
  tasksDatesRange = moment().format("YYYY-MM-DD"),
  children,
}) => {
  const [datesRange, setDatesRange] = useState(tasksDatesRange);

  return (
    <TasksDatesRangeContext.Provider value={{ datesRange, setDatesRange }}>
      {children}
    </TasksDatesRangeContext.Provider>
  );
};

TasksDatesRangeProvider.propTypes = {
  tasksDatesRange: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useTasksDatesRangeContext() {
  return useContext(TasksDatesRangeContext);
}

import PropTypes from "prop-types";
import { useContext, createContext } from "react";
import moment from "moment";

const TasksDatesRangeContext = createContext(moment().format("YYYY-MM-DD"));

export const TasksDatesRangeProvider = ({
  datesRange = moment().format("YYYY-MM-DD"),
  setDatesRange,
  children,
}) => {
  return (
    <TasksDatesRangeContext.Provider value={{ datesRange, setDatesRange }}>
      {children}
    </TasksDatesRangeContext.Provider>
  );
};

TasksDatesRangeProvider.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setDate: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useTasksDatesRangeContext() {
  return useContext(TasksDatesRangeContext);
}

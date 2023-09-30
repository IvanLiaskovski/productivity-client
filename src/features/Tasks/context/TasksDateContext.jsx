import PropTypes from "prop-types";
import { useContext, createContext } from "react";
import moment from "moment";

const TasksDateContext = createContext(moment().format("YYYY-MM-DD"));

export const TasksDateProvider = ({
  date = moment().format("YYYY-MM-DD"),
  setDate,
  children,
}) => {
  return (
    <TasksDateContext.Provider value={{ date, setDate }}>
      {children}
    </TasksDateContext.Provider>
  );
};

TasksDateProvider.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setDate: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useTasksDateContext() {
  return useContext(TasksDateContext);
}

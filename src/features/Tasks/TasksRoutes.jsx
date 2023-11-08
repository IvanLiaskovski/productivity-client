import { useMediaQuery } from "react-responsive";
import { Routes, Route, Navigate } from "react-router";

import TasksDayView from "./components/TasksDayView/TasksDayView";
import TasksWeekView from "./components/TasksWeekView/TasksWeekView";
import TasksMonthView from "./components/TasksMonthView/TasksMonthView";
import TasksYearView from "./components/TasksYearView/TasksYearView";

const TasksRoutes = () => {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Routes>
      <Route path="/day" element={<TasksDayView />} />
      <Route
        path="/week"
        element={
          isMediumScreen ? <TasksWeekView /> : <Navigate to="/task/day" />
        }
      />
      <Route
        path="/month"
        element={
          isMediumScreen ? <TasksMonthView /> : <Navigate to="/task/day" />
        }
      />
      <Route path="/year" element={<TasksYearView />} />
      <Route index element={<Navigate to="/task/day" replace />} />
    </Routes>
  );
};

export default TasksRoutes;

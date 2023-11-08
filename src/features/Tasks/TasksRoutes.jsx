import { useMediaQuery } from "react-responsive";
import { Routes, Route, Navigate } from "react-router";

import TasksDayView from "./pages/TasksDayView/TasksDayView";
import TasksWeekView from "./pages/TasksWeekView/TasksWeekView";
import TasksMonthView from "./pages/TasksMonthView/TasksMonthView";
import TasksYearView from "./pages/TasksYearView/TasksYearView";

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

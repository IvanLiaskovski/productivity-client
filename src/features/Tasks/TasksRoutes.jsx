import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { Routes, Route, Navigate } from "react-router";

const TasksDayView = lazy(() => import("./pages/TasksDayView/TasksDayView"));
const TasksWeekView = lazy(() => import("./pages/TasksWeekView/TasksWeekView"));
const TasksMonthView = lazy(() =>
  import("./pages/TasksMonthView/TasksMonthView"),
);
const TasksYearView = lazy(() => import("./pages/TasksYearView/TasksYearView"));
import RouteLoading from "./RouteLoading";

const TasksRoutes = () => {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Routes>
      <Route
        path="/day"
        element={
          <Suspense fallback={<RouteLoading />}>
            <TasksDayView />
          </Suspense>
        }
      />
      <Route
        path="/week"
        element={
          isMediumScreen ? (
            <Suspense fallback={<RouteLoading />}>
              <TasksWeekView />{" "}
            </Suspense>
          ) : (
            <Navigate to="/task/day" />
          )
        }
      />
      <Route
        path="/month"
        element={
          isMediumScreen ? (
            <Suspense fallback={<RouteLoading />}>
              <TasksMonthView />
            </Suspense>
          ) : (
            <Navigate to="/task/day" />
          )
        }
      />
      <Route
        path="/year"
        element={
          <Suspense fallback={<RouteLoading />}>
            <TasksYearView />
          </Suspense>
        }
      />
      <Route index element={<Navigate to="/task/day" replace />} />
    </Routes>
  );
};

export default TasksRoutes;

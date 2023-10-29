import moment from "moment";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { TasksDateProvider } from "./context/TasksDateContext";
import { TasksDatesRangeProvider } from "./context/TasksDatesRangeContext";
import { TasksManualDateChangeProvider } from "./context/TasksManualDateChangeContext";
import { Routes, Route, Navigate, useLocation } from "react-router";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksNavigation from "./components/TasksNavigation/TasksNavigation";
import TasksDayView from "./components/TasksDayView/TasksDayView";
import TasksWeekView from "./components/TasksWeekView/TasksWeekView";
import TasksMonthView from "./components/TasksMonthView/TasksMonthView";
import TasksYearView from "./components/TasksYearView/TasksYearView";
import useCheckTasksURL from "./hooks/useCheckTasksURL";

function Tasks() {
  const [isManualChange, setManualChange] = useState(false);
  const [taskDate, setTaskDate] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const isDayView = useCheckTasksURL("day");
  const isYearView = useCheckTasksURL("year");
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setDate(taskDate);
  }, [path]);

  return (
    <TasksManualDateChangeProvider
      isManualChange={isManualChange}
      setManualChange={setManualChange}
    >
      <TasksDatesRangeProvider datesRange={date} setDatesRange={setDate}>
        <TasksDateProvider date={taskDate} setDate={setTaskDate}>
          <div className="md:w-[100vw - 128px] md:ml-[128px] md:pb-7">
            <div
              className={`container mx-auto w-[80vw] px-4 pt-14 md:flex md:min-h-screen ${
                isDayView || isYearView
                  ? "md:max-w-[1080px] md:px-14 lg:px-5"
                  : " max-w-[1980px] md:px-5"
              }  md:flex-col`}
            >
              {isMediumScreen && <TasksNavigation />}
              <TasksHeader />
              <Routes>
                <Route path="/day" element={<TasksDayView />} />
                <Route
                  path="/week"
                  element={
                    isMediumScreen ? (
                      <TasksWeekView />
                    ) : (
                      <Navigate to="/task/day" />
                    )
                  }
                />
                <Route
                  path="/month"
                  element={
                    isMediumScreen ? (
                      <TasksMonthView />
                    ) : (
                      <Navigate to="/task/day" />
                    )
                  }
                />
                <Route path="/year" element={<TasksYearView />} />
                <Route index element={<Navigate to="/task/day" replace />} />
              </Routes>
            </div>
          </div>
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </TasksManualDateChangeProvider>
  );
}

export default Tasks;

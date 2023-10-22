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

function Tasks() {
  const [isManualChange, setManualChange] = useState(false);
  const [taskDate, setTaskDate] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useState(new Date(moment().format("YYYY-MM-DD")));
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const location = useLocation();

  useEffect(() => {
    setDate(taskDate);
  }, [location]);

  return (
    <TasksManualDateChangeProvider
      isManualChange={isManualChange}
      setManualChange={setManualChange}
    >
      <TasksDatesRangeProvider datesRange={date} setDatesRange={setDate}>
        <TasksDateProvider date={taskDate} setDate={setTaskDate}>
          <div className="md:w-[100vw - 128px] md:ml-[128px] md:pb-7">
            <div className="container mx-auto px-4 pt-14 md:flex md:min-h-screen md:max-w-[80vw] md:flex-col md:px-5">
              <TasksHeader />
              {isMediumScreen && <TasksNavigation />}
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

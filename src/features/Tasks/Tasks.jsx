import { useEffect, useState } from "react";
import { TasksDateProvider } from "./context/TasksDateContext";
import { TasksDatesRangeProvider } from "./context/TasksDatesRangeContext";
import { Routes, Route, useLocation } from "react-router";
import { Navigate } from "react-router";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksNavigation from "./components/TasksNavigation/TasksNavigation";
import TasksDayView from "./components/TasksDayView/TasksDayView";
import TasksWeekView from "./components/TasksWeekView/TasksWeekView";
import moment from "moment";

function Tasks() {
  const [taskDate, setTaskDate] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useState(new Date(moment().format("YYYY-MM-DD")));
  const location = useLocation();

  useEffect(() => {
    setDate(taskDate);
  }, [location]);

  return (
    <TasksDatesRangeProvider datesRange={date} setDatesRange={setDate}>
      <TasksDateProvider date={taskDate} setDate={setTaskDate}>
        <div className="md:w-[100vw - 128px] max-h-screen md:ml-[128px] md:pb-7">
          <div className="container mx-auto max-w-6xl px-5 pt-14 md:flex md:min-h-screen md:flex-col">
            <TasksHeader />
            <TasksNavigation />
            <Routes>
              <Route path="/day" element={<TasksDayView />} />
              <Route path="/week" element={<TasksWeekView />} />
              <Route index element={<Navigate to="/task/day" replace />} />
            </Routes>
          </div>
        </div>
      </TasksDateProvider>
    </TasksDatesRangeProvider>
  );
}

export default Tasks;

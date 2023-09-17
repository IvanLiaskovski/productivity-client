import { useState } from "react";
import { TasksDateRangeProvider } from "./context/TasksDateRangeContext";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksNavigation from "./components/TasksNavigation/TasksNavigation";
import TasksDayView from "./components/TasksDayView/TasksDayView";

function Tasks() {
  const [date, setDate] = useState(new Date());

  return (
    <TasksDateRangeProvider date={date} setDate={setDate}>
      <div className="md:w-[100vw - 128px] max-h-screen md:ml-[128px] md:pb-7">
        <div className="container mx-auto max-w-6xl px-5 pt-14 md:flex md:min-h-screen md:flex-col">
          <TasksHeader />
          <TasksNavigation />
          <Routes>
            <Route path="/day" element={<TasksDayView />} />
            <Route index element={<Navigate to="/task/day" replace />} />
          </Routes>
        </div>
      </div>
    </TasksDateRangeProvider>
  );
}

export default Tasks;

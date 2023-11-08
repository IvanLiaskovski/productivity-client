import moment from "moment";
import { useMediaQuery } from "react-responsive";
import useCheckTasksURL from "./hooks/useCheckTasksURL";
import { useEffect, useState } from "react";
import { TasksDateProvider } from "./context/TasksDateContext";
import { TasksDatesRangeProvider } from "./context/TasksDatesRangeContext";
import { TasksManualDateChangeProvider } from "./context/TasksManualDateChangeContext";
import { useLocation } from "react-router";

import TasksRoutes from "./TasksRoutes";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksNavigation from "./components/TasksNavigation/TasksNavigation";

function Tasks() {
  const [isManualChange, setManualChange] = useState(false);
  const [taskDate, setTaskDate] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const isDayOrYearView = useCheckTasksURL(["day", "year"]);
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
              className={`container mx-auto px-4 md:flex md:min-h-screen md:pt-14 lg:w-[80vw] ${
                isDayOrYearView
                  ? "md:max-w-[1080px] md:px-14 lg:px-5"
                  : " max-w-[1980px] md:px-5"
              }  md:flex-col`}
            >
              {isMediumScreen && <TasksNavigation />}
              <TasksHeader />
              <TasksRoutes />
            </div>
          </div>
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </TasksManualDateChangeProvider>
  );
}

export default Tasks;

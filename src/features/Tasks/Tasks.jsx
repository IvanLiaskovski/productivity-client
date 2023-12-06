import { useMediaQuery } from "react-responsive";
import useCheckTasksURL from "./hooks/useCheckTasksURL";
import { TasksDateProvider } from "./context/TasksDateContext";
import { TasksDatesRangeProvider } from "./context/TasksDatesRangeContext";
import { TasksManualDateChangeProvider } from "./context/TasksManualDateChangeContext";

import TasksRoutes from "./TasksRoutes";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksNavigation from "./components/TasksNavigation/TasksNavigation";

function Tasks() {
  const isDayOrYearView = useCheckTasksURL(["day", "year"]);
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <TasksManualDateChangeProvider>
      <TasksDatesRangeProvider>
        <TasksDateProvider>
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

import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";

import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";
import TasksNavItem from "../TasksNavigation/TasksNavItem";
import SettingsBtn from "../../../../components/Buttons/SettingsBtn";

const TaskDayPicker = lazy(() => import("../TaskDatePicker/TaskDayPicker"));
const TaskMonthPicker = lazy(() => import("../TaskDatePicker/TaskMonthPicker"));
const TaskYearPicker = lazy(() => import("../TaskDatePicker/TaskYearPicker"));
import Loading from "../TaskDatePicker/Loading";

const TasksHeaderControls = () => {
  const isScreenMedium = useMediaQuery({ query: "(min-width: 724px)" });
  const isMonth = useCheckTasksURL("month");
  const isYear = useCheckTasksURL("year");

  return (
    <div>
      <div className="w-100 flex items-center justify-between font-sans lg:justify-start">
        <Suspense fallback={<Loading />}>
          <div>
            {isYear ? (
              <TaskYearPicker />
            ) : isMonth ? (
              <TaskMonthPicker />
            ) : (
              <TaskDayPicker />
            )}
          </div>
        </Suspense>
        {isScreenMedium ? (
          <div className="lg:ml-5 lg:pb-2">
            <ActiveTasksSwitch />
          </div>
        ) : (
          <div className="flex gap-3">
            <TasksNavItem
              className="rounded-lg px-2 py-1 text-xl"
              url="/task/day"
            >
              Day
            </TasksNavItem>
            <TasksNavItem
              className="rounded-lg px-2 py-1 text-xl"
              url="/task/year"
            >
              Year
            </TasksNavItem>
            <SettingsBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksHeaderControls;

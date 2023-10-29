import { useMediaQuery } from "react-responsive";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";

import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";
import ModeBtn from "../../../../components/Buttons/ModeBtn";
import SettingsBtn from "../../../../components/Buttons/SettingsBtn";
import TaskDayPicker from "../TaskDatePicker/TaskDayPicker";
import TaskMonthPicker from "../TaskDatePicker/TaskMonthPicker";
import TaskYearPicker from "../TaskDatePicker/TaskYearPicker";

const TasksHeaderControls = () => {
  const isScreenMedium = useMediaQuery({ query: "(min-width: 768px)" });

  const isDay = useCheckTasksURL("day");
  const isMonth = useCheckTasksURL("month");
  const isYear = useCheckTasksURL("year");

  return (
    <div>
      <div className="w-100 flex items-center justify-between font-sans lg:justify-start">
        <div>
          {isYear ? (
            <TaskYearPicker />
          ) : isMonth ? (
            <TaskMonthPicker />
          ) : (
            <TaskDayPicker />
          )}
        </div>
        {isScreenMedium ? (
          <div className="lg:ml-5 lg:pb-2">
            <ActiveTasksSwitch />
          </div>
        ) : (
          <div className="flex gap-3">
            <ModeBtn to="/task/day" isActive={isDay}>
              Day
            </ModeBtn>
            <ModeBtn to="/task/year" isActive={isYear}>
              Year
            </ModeBtn>
            <SettingsBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksHeaderControls;

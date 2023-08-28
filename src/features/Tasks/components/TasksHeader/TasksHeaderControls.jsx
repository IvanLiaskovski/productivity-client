import { useMediaQuery } from "react-responsive";
import { useTasksMode } from "../../hooks/useTasksMode";

import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";
import ModeBtn from "../../../../components/Buttons/ModeBtn";
import SettingsBtn from "../../../../components/Buttons/SettingsBtn";
import TaskDayPicker from "../TaskDatePicker/TaskDayPicker";
import TaskYearPicker from "../TaskDatePicker/TaskYearPicker";

const TasksHeaderControls = () => {
  const [mode, changeMode] = useTasksMode();
  const isScreenLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const isYear = mode === "year";
  const isDay = mode === "day";

  return (
    <div>
      <div className="w-100 flex items-center justify-between font-sans lg:justify-start">
        <div>{isYear ? <TaskYearPicker /> : <TaskDayPicker />}</div>
        {isScreenLarge ? (
          <div className="lg:ml-11 lg:pb-2">
            <ActiveTasksSwitch />
          </div>
        ) : (
          <div className="flex gap-3">
            <ModeBtn onClick={changeMode("day")} isActive={isDay}>
              Day
            </ModeBtn>
            <ModeBtn onClick={changeMode("year")} isActive={isYear}>
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

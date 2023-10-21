import TaskMonthPicker from "../TaskDatePicker/TaskMonthPicker";
import TasksWeeksPanel from "./TasksWeeksPanel";
import TasksMonthItemsGroup from "./TasksMonthItemsGroup";
import MoveMonthBtnGroup from "./MoveMonthBtnGroup";
import ActiveTasksSwitch from "../Buttons/ActiveTasksSwitch";

const TasksMonthView = () => {
  return (
    <div>
      <MoveMonthBtnGroup />
      <div className="flex items-center gap-10">
        <TaskMonthPicker />
        <ActiveTasksSwitch className="mb-2" />
      </div>
      <TasksWeeksPanel />
      <TasksMonthItemsGroup />
    </div>
  );
};

export default TasksMonthView;

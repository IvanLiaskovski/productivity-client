import { createWeekDatesRange } from "../../helpers/tasksHelpers";
import TasksWeekItem from "./TasksWeekItem";

const TasksWeekItemGroup = ({ datesRange }) => {
  const dateItems = createWeekDatesRange(datesRange).slice(0, 7);
  console.log(dateItems);

  return (
    <div className="grid grid-cols-7 items-start justify-start gap-2 px-10">
      {dateItems.map((item) => (
        <TasksWeekItem tasksDate={item.itemDate} />
      ))}
    </div>
  );
};

export default TasksWeekItemGroup;

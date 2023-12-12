import moment from "moment";
import { useState } from "react";
import { useMemo } from "react";
import { createMonthDatesRange } from "../../helpers/tasksHelpers";
import { useTasksDateContext } from "../../context/TasksDateContext";
import TasksMonthItem from "./TasksMonthItem";
import TasksDragAndDropContext from "../../context/TasksDragAndDropContext";

const TasksMonthItemsGroup = () => {
  const { date } = useTasksDateContext();
  const [activeTaskId, setActiveTaskId] = useState(null);

  const monthDays = useMemo(
    () => createMonthDatesRange(moment(date).format("YYYY-MM-DD")),
    [date],
  );

  const currentMonth = moment(date).format("MMMM");
  const allowTooltip = !activeTaskId;

  return (
    <TasksDragAndDropContext
      activeTaskId={activeTaskId}
      setActiveTaskId={setActiveTaskId}
    >
      <div className="grid grid-cols-7 gap-1">
        {monthDays.map(({ monthName, itemDate, day }) => (
          <TasksMonthItem
            className={currentMonth !== monthName ? "bg-opacity-50" : ""}
            key={itemDate}
            date={itemDate}
            day={day}
            allowTooltip={allowTooltip}
          />
        ))}
      </div>
    </TasksDragAndDropContext>
  );
};

export default TasksMonthItemsGroup;

import moment from "moment";
import { useState } from "react";
import { useMemo } from "react";
import { createMonthDatesRange } from "../../helpers/tasksHelpers";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useFetchTasks } from "../../hooks/useFetchTasks";
import TasksMonthItem from "./TasksMonthItem";
import TasksDragAndDropContext from "../../context/TasksDragAndDropContext";

const TasksMonthItemsGroup = () => {
  const { date } = useTasksDateContext();
  const [activeTaskId, setActiveTaskId] = useState(null);

  const { isLoading, isError, error } = useFetchTasks(
    moment(date).clone().startOf("month").format("YYYY-MM-DD"),
    moment(date).clone().endOf("month").format("YYYY-MM-DD"),
    "day",
  );

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
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
        ))}
      </div>
    </TasksDragAndDropContext>
  );
};

export default TasksMonthItemsGroup;

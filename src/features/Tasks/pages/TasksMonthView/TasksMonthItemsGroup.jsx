import moment from "moment";
import { useState } from "react";
import { useMemo } from "react";
import { createMonthDatesRange } from "../../helpers/tasksHelpers";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useFetchTasksAggregated } from "../../hooks/useFetchTasksAggregated";
import TasksMonthItem from "./TasksMonthItem";
import TasksDragAndDropContext from "../../context/TasksDragAndDropContext";

const TasksMonthItemsGroup = () => {
  const { date } = useTasksDateContext();
  const [activeTaskId, setActiveTaskId] = useState(null);

  const { aggregatedData, isLoading, isError, error } = useFetchTasksAggregated(
    moment(date).clone().startOf("month").startOf("week").format("YYYY-MM-DD"),
    moment(date).clone().endOf("month").endOf("week").format("YYYY-MM-DD"),
    "month",
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
            nextPage={aggregatedData[itemDate]?.nextPage}
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

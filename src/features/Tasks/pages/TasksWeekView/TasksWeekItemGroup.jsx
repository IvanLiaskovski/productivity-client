import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useFetchTasks } from "../../hooks/useFetchTasks";
import { createWeekDatesRange } from "../../helpers/tasksHelpers";
import TasksWeekItem from "./TasksWeekItem";
import TasksDragAndDropContext from "../../context/TasksDragAndDropContext";
import moment from "moment";

const TasksWeekItemGroup = () => {
  const [activeId, setActiveId] = useState();
  const { date } = useTasksDateContext();
  const allowTooltip = !activeId;

  const { isLoading, isError, error } = useFetchTasks(
    moment(date).startOf("isoWeek"),
    moment(date).endOf("isoWeek"),
    "day",
  );

  const dateItems = useMemo(
    () => createWeekDatesRange(date).slice(7, 14),
    [date],
  );

  return (
    <TasksDragAndDropContext
      activeTaskId={activeId}
      setActiveTaskId={setActiveId}
    >
      <div className="grid min-h-[400px] grid-cols-7 justify-start px-2 lg:px-10">
        {dateItems.map((item) => (
          <TasksWeekItem
            key={item.itemDate}
            tasksDate={item.itemDate}
            isLoading={isLoading}
            isError={isError}
            error={error}
            allowTooltip={allowTooltip}
          />
        ))}
      </div>
    </TasksDragAndDropContext>
  );
};

TasksWeekItemGroup.propTypes = {
  datesRange: PropTypes.string,
};

export default TasksWeekItemGroup;

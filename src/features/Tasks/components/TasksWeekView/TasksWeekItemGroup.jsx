import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { createWeekDatesRange } from "../../helpers/tasksHelpers";
import TasksWeekItem from "./TasksWeekItem";
import TasksDragAndDropContext from "../../context/TasksDragAndDropContext";

const TasksWeekItemGroup = ({ datesRange }) => {
  const [activeId, setActiveId] = useState();
  const allowTooltip = !activeId;

  const dateItems = useMemo(
    () => createWeekDatesRange(datesRange).slice(7, 14),
    [datesRange],
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

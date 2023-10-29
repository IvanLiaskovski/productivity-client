import PropTypes from "prop-types";
import { createWeekDatesRange } from "../../helpers/tasksHelpers";
import TasksWeekItem from "./TasksWeekItem";

const TasksWeekItemGroup = ({ datesRange }) => {
  const dateItems = createWeekDatesRange(datesRange).slice(0, 7);

  return (
    <div className="grid grid-cols-7 justify-start px-2 lg:px-10">
      {dateItems.map((item) => (
        <TasksWeekItem key={item.itemDate} tasksDate={item.itemDate} />
      ))}
    </div>
  );
};

TasksWeekItemGroup.propTypes = {
  datesRange: PropTypes.string,
};

export default TasksWeekItemGroup;

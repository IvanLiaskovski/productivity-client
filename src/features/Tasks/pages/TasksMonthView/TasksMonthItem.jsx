import PropTypes from "prop-types";
import { useDroppable } from "@dnd-kit/core";
import { twMerge } from "tailwind-merge";
import TasksDayList from "../TasksDayView/TasksDayList";
import TaskCreationModal from "../../components/Modals/TaskCreationModal";

const TasksMonthItem = ({ date, day, allowTooltip, className }) => {
  const { isOver, setNodeRef } = useDroppable({ id: date });
  const styles = twMerge(
    "p-1 rounded-lg min-h-[120px] bg-block",
    isOver && "bg-blue-100 bg-opacity-30",
    className,
  );

  return (
    <div className={styles} ref={setNodeRef} data-testid="month-item-wrapper">
      <TaskCreationModal date={date}>
        <h5 className="text-blue-100">{day}.</h5>
        <TasksDayList
          tasksDate={date}
          tasksType="day"
          allowTooltip={allowTooltip}
          className="max-h-[400px]"
        />
      </TaskCreationModal>
    </div>
  );
};

TasksMonthItem.propTypes = {
  date: PropTypes.string,
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  allowTooltip: PropTypes.bool,
  className: PropTypes.string,
};

export default TasksMonthItem;

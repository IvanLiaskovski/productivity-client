import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { useDroppable } from "@dnd-kit/core";
import { twMerge } from "tailwind-merge";
const TasksDayList = lazy(() =>
  import("../../components/TasksDayList/TasksDayList"),
);
import Loading from "../../components/TasksDayList/Loading";
import TaskCreationModal from "../../components/Modals/TaskCreationModal";

const TasksMonthItem = ({
  date,
  day,
  allowTooltip,
  isLoading,
  isError,
  error,
  className,
}) => {
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
        <Suspense fallback={<Loading q={2} />}>
          <TasksDayList
            tasksDate={date}
            tasksType="day"
            allowTooltip={allowTooltip}
            isLoading={isLoading}
            isError={isError}
            error={error}
            className="max-h-[400px]"
          />
        </Suspense>
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

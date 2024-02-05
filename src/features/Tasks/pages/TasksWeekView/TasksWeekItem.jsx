import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { useDroppable } from "@dnd-kit/core";
import { twMerge } from "tailwind-merge";
import CreateBtn from "../../../../components/Buttons/CreateBtn";
import { FaPlus } from "react-icons/fa";
import TaskCreationModal from "../../components/Modals/TaskCreationModal";

const TasksDayList = lazy(() =>
  import("../../components/TasksDayList/TasksDayList"),
);
import Loading from "../../components/TasksDayList/Loading";

const TasksWeekItem = ({
  tasksDate,
  allowTooltip,
  isLoading,
  isError,
  error,
  className,
}) => {
  const { isOver, setNodeRef } = useDroppable({ id: tasksDate });

  const styles = twMerge(
    "flex justify-center border-x-2 border-block border-r-transparent border-opacity-80 px-2 first:border-transparent rounded h-full",
    isOver && "bg-blue-100 bg-opacity-30",
    className,
  );

  return (
    <div ref={setNodeRef} className={styles}>
      <TaskCreationModal date={tasksDate}>
        <CreateBtn className="mb-2 hidden w-full rounded-lg border-4 py-1 text-blue-100">
          <FaPlus />
        </CreateBtn>
        <Suspense fallback={<Loading q={2} />}>
          <TasksDayList
            tasksDate={tasksDate}
            isLoading={isLoading}
            isError={isError}
            error={error}
            allowTooltip={allowTooltip}
          />
        </Suspense>
      </TaskCreationModal>
    </div>
  );
};

TasksWeekItem.propTypes = {
  tasksDate: PropTypes.string,
  allowTooltip: PropTypes.bool,
  className: PropTypes.string,
};

export default TasksWeekItem;

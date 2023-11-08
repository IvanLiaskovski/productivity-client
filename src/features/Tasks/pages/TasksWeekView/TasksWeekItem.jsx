import PropTypes from "prop-types";
import { useDroppable } from "@dnd-kit/core";
import { twMerge } from "tailwind-merge";
import TasksDayList from "../TasksDayView/TasksDayList";
import CreateBtn from "../../../../components/Buttons/CreateBtn";
import { FaPlus } from "react-icons/fa";
import TaskCreationModal from "../../components/Modals/TaskCreationModal";

const TasksWeekItem = ({ tasksDate, allowTooltip, className }) => {
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
        <TasksDayList tasksDate={tasksDate} allowTooltip={allowTooltip} />
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

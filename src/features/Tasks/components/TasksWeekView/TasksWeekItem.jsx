import PropTypes from "prop-types";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { twMerge } from "tailwind-merge";
import TasksDayList from "../TasksDayView/TasksDayList";
import CreateTask from "../CreateTask/CreateTask";
import TaskModalLayout from "../Layouts/TaskModalLayout";
import CreateBtn from "../../../../components/Buttons/CreateBtn";
import { FaPlus } from "react-icons/fa";

const TasksWeekItem = ({ tasksDate, allowTooltip, className }) => {
  const [isOpen, setOpen] = useState(false);
  const { isOver, setNodeRef } = useDroppable({ id: tasksDate });

  const styles = twMerge(
    "flex justify-center border-x-2 border-block border-r-transparent border-opacity-80 px-2 first:border-transparent rounded",
    isOver && "bg-blue-100 bg-opacity-30",
    className,
  );

  const openCreateModal = () => {
    setOpen(true);
  };

  const closeCreateModal = (e) => {
    if (!e.target.closest(".content")) {
      setOpen(false);
    }
  };

  return (
    <div className={styles} ref={setNodeRef} onDoubleClick={openCreateModal}>
      <CreateBtn className="mb-2 hidden w-full rounded-lg border-4 py-1 text-blue-100">
        <FaPlus />
      </CreateBtn>
      <TasksDayList tasksDate={tasksDate} allowTooltip={allowTooltip} />
      {isOpen && (
        <TaskModalLayout onClose={closeCreateModal}>
          <CreateTask
            date={tasksDate}
            onAfterSave={setOpen}
            priorityBackground="dark"
            mode="dark"
          />
        </TaskModalLayout>
      )}
    </div>
  );
};

TasksWeekItem.propTypes = {
  tasksDate: PropTypes.string,
  allowTooltip: PropTypes.bool,
  className: PropTypes.string,
};

export default TasksWeekItem;

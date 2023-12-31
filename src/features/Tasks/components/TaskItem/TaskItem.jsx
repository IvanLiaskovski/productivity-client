import PropTypes from "prop-types";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectTaskById } from "../../tasksSlice";
import { twMerge } from "tailwind-merge";

import TaskModalLayout from "../Layouts/TaskModalLayout";
import TaskEdit from "./TaskEdit";
import TaskShow from "./TaskShow";

const TaskItem = memo(({ taskId, hideActions, isOpen, setOpen }) => {
  const task = useSelector((state) => selectTaskById(state, taskId));
  const isCompleted = task?.isCompleted;

  const styles = twMerge(
    "w-100 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset] relative mt-3 overflow-hidden rounded-2xl text-center font-sans transition duration-1000 ease-out z-50",
    isCompleted ? "bg-green-200 " : "bg-primary-200",
  );

  const closeModal = (e) => {
    if (!e.target.closest(".content")) {
      setOpen(false);
    }
  };

  return (
    <div className={styles} data-testid="task-item-wrapper">
      {isOpen && !isCompleted ? (
        <TaskModalLayout onClose={closeModal}>
          <TaskEdit setOpen={setOpen} {...task} />
        </TaskModalLayout>
      ) : (
        <TaskShow
          id={task?.id}
          content={task?.content}
          priority={task?.priority}
          isCompleted={isCompleted}
          setOpen={setOpen}
          hideActions={hideActions}
        />
      )}
    </div>
  );
});

TaskItem.displayName = "TaskItem";

TaskItem.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hideActions: PropTypes.string,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default TaskItem;

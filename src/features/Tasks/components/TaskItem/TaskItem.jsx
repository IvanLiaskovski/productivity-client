import PropTypes from "prop-types";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectTaskById } from "../../tasksSlice";
import { twMerge } from "tailwind-merge";

import TaskEdit from "./TaskEdit";
import TaskShow from "./TaskShow";

const TaskItem = memo(({ taskId, isOpen, setOpen }) => {
  const task = useSelector((state) => selectTaskById(state, taskId));

  const styles = twMerge(
    "w-100 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset] relative mt-3 overflow-hidden rounded-2xl text-center font-sans transition duration-1000 ease-out",
    task?.isCompleted ? "bg-green-200 " : "bg-primary-200",
  );

  return (
    <div className={styles}>
      {isOpen ? (
        <TaskEdit setOpen={setOpen} {...task} />
      ) : (
        <TaskShow setOpen={setOpen} {...task} />
      )}
    </div>
  );
});

TaskItem.displayName = "TaskItem";

TaskItem.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default TaskItem;

import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useDraggable } from "@dnd-kit/core";

const TaskDraggable = ({ taskId, className, children }) => {
  const { setNodeRef, isDragging, listeners } = useDraggable({
    id: taskId,
  });

  const styles = twMerge(isDragging && "opacity-0", className);

  return (
    <div ref={setNodeRef} className={styles} {...listeners}>
      {children}
    </div>
  );
};

TaskDraggable.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TaskDraggable;

import PropTypes from "prop-types";
import TaskActive from "./TaskActive";
import TaskCompleted from "./TaskCompleted";

const TaskShow = ({
  id,
  content,
  priority,
  isCompleted,
  hideActions,
  setOpen,
}) => {
  if (isCompleted) {
    return <TaskCompleted taskId={id} content={content} priority={priority} />;
  }

  return (
    <TaskActive
      taskId={id}
      content={content}
      priority={priority}
      setOpen={setOpen}
      hideActions={hideActions}
    />
  );
};

TaskShow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  priority: PropTypes.string,
  isCompleted: PropTypes.bool,
  hideActions: PropTypes.string,
  setOpen: PropTypes.func,
};

export default TaskShow;

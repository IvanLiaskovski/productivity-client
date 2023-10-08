import PropTypes from "prop-types";
import TaskActive from "./TaskActive";
import TaskCompleted from "./TaskCompleted";

const TaskShow = ({ id, content, priority, isCompleted, setOpen }) => {
  if (isCompleted) {
    return <TaskCompleted taskId={id} content={content} priority={priority} />;
  }

  return (
    <TaskActive
      taskId={id}
      content={content}
      priority={priority}
      setOpen={setOpen}
    />
  );
};

TaskShow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  priority: PropTypes.string,
  isCompleted: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default TaskShow;

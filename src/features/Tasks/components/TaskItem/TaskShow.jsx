import PropTypes from "prop-types";
import TaskActive from "./TaskActive";
import TaskCompleted from "./TaskCompleted";

const TaskShow = ({
  id,
  name,
  priority,
  isCompleted,
  hideActions,
  setOpen,
}) => {
  if (isCompleted) {
    return <TaskCompleted taskId={id} name={name} priority={priority} />;
  }

  return (
    <TaskActive
      taskId={id}
      name={name}
      priority={priority}
      setOpen={setOpen}
      hideActions={hideActions}
    />
  );
};

TaskShow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  priority: PropTypes.string,
  isCompleted: PropTypes.bool,
  hideActions: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default TaskShow;

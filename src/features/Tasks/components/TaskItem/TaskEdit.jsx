import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../tasksSlice";

import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";
import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";

const TaskEdit = ({
  id,
  content: contentProps,
  priority: priorityProps,
  setOpen,
}) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState(contentProps);
  const [priority, setPriority] = useState(priorityProps);

  function saveTask() {
    dispatch(
      updateTask({
        id,
        content,
        priority,
      }),
    );

    setOpen(false);
  }

  return (
    <AppearAnimation className="h-auto p-2 md:p-4" animationType="fade">
      <TaskManagementPanel
        content={content}
        priority={priority}
        setContent={setContent}
        setPriority={setPriority}
        onSave={saveTask}
        priorityBackground="dark"
      />
    </AppearAnimation>
  );
};

TaskEdit.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  priority: PropTypes.string,
  setOpen: PropTypes.func,
};

export default TaskEdit;

import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../tasksSlice";
import { twMerge } from "tailwind-merge";

import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";
import TaskActions from "./TaskActions";

const TaskEdit = ({
  id,
  content: contentProps,
  priority: priorityProps,
  setOpen,
}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(contentProps);
  const [priority, setPriority] = useState(priorityProps);
  const [isActionStart, setActionStart] = useState(false);

  const panelWrapperStyles = twMerge(
    "relative z-30",
    isActionStart && "opacity-80",
  );

  const closeEdit = () => setOpen(false);

  function saveTask() {
    dispatch(
      updateTask({
        id,
        content,
        priority,
      }),
    );

    closeEdit();
  }

  return (
    <>
      <div className={panelWrapperStyles}>
        <TaskManagementPanel
          content={content}
          priority={priority}
          setContent={setContent}
          setPriority={setPriority}
          onSave={saveTask}
          priorityBackground="dark"
        />
      </div>
      <TaskActions
        taskId={id}
        isActionStart={isActionStart}
        setActionStart={setActionStart}
        onAfterAction={closeEdit}
        isEdit
      />
    </>
  );
};

TaskEdit.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  priority: PropTypes.string,
  setOpen: PropTypes.func,
};

export default TaskEdit;

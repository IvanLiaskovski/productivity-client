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
  description: descriptionProps,
  priority: priorityProps,
  setOpen,
}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(contentProps);
  const [description, setDescription] = useState(descriptionProps);
  const [priority, setPriority] = useState(priorityProps);
  const [isActionStart, setActionStart] = useState(false);

  const panelWrapperStyles = twMerge(
    "relative z-20 p-2",
    isActionStart && "opacity-80",
  );

  const closeEdit = () => setOpen(false);

  function saveTask() {
    dispatch(
      updateTask({
        id,
        content,
        description,
        priority,
      }),
    );

    closeEdit();
  }

  const handleStartAction = () => {
    setActionStart(true);
    closeEdit();
  };

  return (
    <>
      <div className={panelWrapperStyles}>
        <TaskManagementPanel
          content={content}
          description={description}
          priority={priority}
          setContent={setContent}
          setDescription={setDescription}
          setPriority={setPriority}
          onSave={saveTask}
          priorityBackground="dark"
        />
      </div>
      <TaskActions
        taskId={id}
        isActionStart={isActionStart}
        setActionStart={handleStartAction}
        onAfterAction={closeEdit}
        isEdit
      />
    </>
  );
};

TaskEdit.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  setOpen: PropTypes.func,
};

export default TaskEdit;

import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../tasksSlice";

import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";
import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";
import TaskActions from "./TaskActions";
import { twMerge } from "tailwind-merge";

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
    <AppearAnimation
      className="group/actions relative h-auto p-2 md:p-4"
      animationType="fade"
    >
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
        isEdit
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

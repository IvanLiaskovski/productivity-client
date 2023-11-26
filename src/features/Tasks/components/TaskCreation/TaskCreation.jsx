import PropTypes from "prop-types";
import { useState } from "react";
import { useCreateTask } from "../../hooks/useCreateTask";
import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";

const TaskCreation = ({
  date,
  type = "day",
  mode = "light",
  priorityBackground,
  setIsEmpty,
  onAfterSave = () => {},
}) => {
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("common");
  const [createTask] = useCreateTask({
    content,
    description,
    priority,
    date,
    type,
  });

  const handleTaskCreation = async () => {
    if (!content) {
      setIsEmpty(true);
      setTimeout(() => setIsEmpty(false), 1000);

      return;
    }

    await createTask();

    onAfterSave();
    setContent("");
    setDescription("");
  };

  return (
    <TaskManagementPanel
      content={content}
      priority={priority}
      setContent={setContent}
      setPriority={setPriority}
      description={description}
      setDescription={setDescription}
      onSave={handleTaskCreation}
      mode={mode}
      priorityBackground={priorityBackground}
    />
  );
};

TaskCreation.propTypes = {
  date: PropTypes.string,
  type: PropTypes.oneOf(["day", "year"]),
  mode: PropTypes.oneOf(["light", "dark"]),
  priorityBackground: PropTypes.oneOf(["light", "dark"]),
  setIsEmpty: PropTypes.func,
  onAfterSave: PropTypes.func,
};

export default TaskCreation;

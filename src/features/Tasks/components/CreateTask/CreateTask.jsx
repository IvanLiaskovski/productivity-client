import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../tasksSlice";
import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";

const CreateTask = ({
  date,
  mode = "light",
  priorityBackground,
  setIsEmpty,
  onAfterSave = () => {},
}) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("common");

  const handleTaskCreation = () => {
    if (!content) {
      setIsEmpty(true);
      setTimeout(() => setIsEmpty(false), 1000);

      return;
    }

    dispatch(
      createTask({
        content,
        description,
        priority,
        date,
      }),
    );

    onAfterSave();
    setContent("");
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

CreateTask.propTypes = {
  date: PropTypes.string,
  mode: PropTypes.oneOf(["light", "dark"]),
  priorityBackground: PropTypes.oneOf(["light", "dark"]),
  setIsEmpty: PropTypes.func,
  onAfterSave: PropTypes.func,
};

export default CreateTask;

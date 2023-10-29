import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../tasksSlice";
import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";
import { PRIORITY_ARR } from "../../../../data/priorityData";

const CreateTask = ({
  date,
  textColor = "light",
  priorityBackground,
  setIsEmpty,
  onAfterSave = () => {},
}) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
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
      onSave={handleTaskCreation}
      textColor={textColor}
      priorityBackground={priorityBackground}
    />
  );
};

CreateTask.propTypes = {
  date: PropTypes.string,
  textColor: PropTypes.oneOf(["light", "dark"]),
  priorityBackground: PropTypes.oneOf(PRIORITY_ARR),
  setIsEmpty: PropTypes.func,
  onAfterSave: PropTypes.func,
};

export default CreateTask;

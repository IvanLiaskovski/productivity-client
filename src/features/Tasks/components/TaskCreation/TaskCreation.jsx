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
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState("common");
  const [createTask] = useCreateTask({
    name,
    notes,
    priority,
    date,
    type,
  });

  const handleTaskCreation = async () => {
    if (!name) {
      setIsEmpty(true);
      setTimeout(() => setIsEmpty(false), 1000);

      return;
    }

    console.log({ name, notes, priority, date, type });

    await createTask();

    onAfterSave();
    setName("");
    setNotes("");
  };

  return (
    <TaskManagementPanel
      name={name}
      priority={priority}
      setName={setName}
      setPriority={setPriority}
      notes={notes}
      setNotes={setNotes}
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

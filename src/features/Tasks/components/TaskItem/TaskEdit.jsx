import PropTypes from "prop-types";
import { useState } from "react";
import { useUpdateTask } from "../../hooks/useUpdateTask";
import { twMerge } from "tailwind-merge";
import { PRIORITY_ARR } from "../../../../data/priorityData";

import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";
import TaskActions from "./TaskActions";

const TaskEdit = ({
  id,
  name: nameProps,
  notes: notesProps,
  priority: priorityProps,
  setOpen,
}) => {
  const [name, setName] = useState(nameProps);
  const [notes, setNotes] = useState(notesProps);
  const [priority, setPriority] = useState(priorityProps);
  const [isActionStart, setActionStart] = useState(false);
  const [updateTask, errors] = useUpdateTask();

  const panelWrapperStyles = twMerge(
    "relative z-20 p-2",
    isActionStart && "opacity-80",
  );

  const closeEdit = () => setOpen(false);

  async function saveTask() {
    const isSuccessful = await updateTask({
      id,
      name,
      notes,
      priority,
    });

    if (isSuccessful) {
      closeEdit();
    }
  }

  const handleStartAction = () => {
    setActionStart(true);
  };

  return (
    <>
      <div className={panelWrapperStyles}>
        <TaskManagementPanel
          name={name}
          notes={notes}
          priority={priority}
          setName={setName}
          setNotes={setNotes}
          setPriority={setPriority}
          onSave={saveTask}
          priorityBackground="dark"
          errors={errors}
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
  name: PropTypes.string,
  notes: PropTypes.string,
  priority: PropTypes.oneOf(PRIORITY_ARR),
  setOpen: PropTypes.func,
};

export default TaskEdit;

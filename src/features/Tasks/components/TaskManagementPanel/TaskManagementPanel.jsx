import PropTypes from "prop-types";
import { useRef } from "react";

import SaveBtn from "../../../../components/Buttons/SaveBtn";
import Textarea from "../../../../components/Fields/Textarea";
import PriorityPanel from "../Priority/PriorityPanel";
import TaskErrors from "./TaskErrors/TaskErrors";
import { FaRegPaperPlane } from "react-icons/fa";

const TaskManagementPanel = ({
  name,
  notes,
  priority,
  setName,
  setNotes,
  setPriority,
  onSave,
  mode,
  priorityBackground,
  errors,
}) => {
  const taskNameRef = useRef();

  const handleChangename = (e) => {
    setName(e.target.value);
  };

  const handleCahngenotes = (e) => {
    setNotes(e.target.value);
  };

  const saveHandle = () => {
    onSave();
    taskNameRef.current.focus();
  };

  return (
    <>
      <Textarea
        title="Name:"
        value={name}
        onChange={handleChangename}
        autoFocus
        mode={mode}
        placeholder="Type task..."
        className="mt-2 max-h-full md:max-h-max"
        ref={taskNameRef}
      />
      <Textarea
        title="Notes:"
        value={notes}
        onChange={handleCahngenotes}
        autoFocus
        mode={mode}
        placeholder="Type notes..."
        className="max-h-full md:max-h-max"
      />
      <TaskErrors errors={errors} />
      <div className="mt-4 flex justify-end">
        <div className="flex gap-1 pr-2">
          <PriorityPanel
            activePriority={priority}
            priorityHandler={setPriority}
            backgroundColor={priorityBackground}
          />
        </div>
        <SaveBtn
          slideFrom={<FaRegPaperPlane />}
          slideTo={<FaRegPaperPlane />}
          onClick={saveHandle}
        />
      </div>
    </>
  );
};

TaskManagementPanel.propTypes = {
  name: PropTypes.string,
  notes: PropTypes.string,
  priority: PropTypes.string,
  setName: PropTypes.func,
  setNotes: PropTypes.func,
  setPriority: PropTypes.func,
  onSave: PropTypes.func,
  mode: PropTypes.string,
  priorityBackground: PropTypes.string,
  errors: PropTypes.array,
};

export default TaskManagementPanel;

import PropTypes from "prop-types";
import { useRef } from "react";

import SaveBtn from "../../../../components/Buttons/SaveBtn";
import Textarea from "../../../../components/Fields/Textarea";
import PriorityPanel from "../Priority/PriorityPanel";
import { FaRegPaperPlane } from "react-icons/fa";

const TaskManagementPanel = ({
  content,
  description,
  priority,
  setContent,
  setDescription,
  setPriority,
  onSave,
  mode,
  priorityBackground,
}) => {
  const taskNameRef = useRef();

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleCahngeDescription = (e) => {
    setDescription(e.target.value);
  };

  const saveHandle = () => {
    onSave();
    taskNameRef.current.focus();
  };

  return (
    <>
      <Textarea
        title="Name:"
        value={content}
        onChange={handleChangeContent}
        autoFocus
        mode={mode}
        placeholder="Type task..."
        className="mt-2 max-h-full md:max-h-max"
        ref={taskNameRef}
      />
      <Textarea
        title="Description:"
        value={description}
        onChange={handleCahngeDescription}
        autoFocus
        mode={mode}
        placeholder="Type description..."
        className="max-h-full md:max-h-max"
      />
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
  content: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  setContent: PropTypes.func,
  setDescription: PropTypes.func,
  setPriority: PropTypes.func,
  onSave: PropTypes.func,
  mode: PropTypes.string,
  priorityBackground: PropTypes.string,
};

export default TaskManagementPanel;

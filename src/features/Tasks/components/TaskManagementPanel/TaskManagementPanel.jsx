import PropTypes from "prop-types";
import { useRef } from "react";

import SaveBtn from "../../../../components/Buttons/SaveBtn";
import Textarea from "../../../../components/Fields/Textarea";
import PriorityPanel from "../Priority/PriorityPanel";
import { FaRegPaperPlane } from "react-icons/fa";

const TaskManagementPanel = ({
  content,
  priority,
  setContent,
  setPriority,
  onToggle,
  onSave,
  textColor,
  priorityBackground,
}) => {
  const fieldRef = useRef();

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const saveHandle = () => {
    onSave();
    fieldRef.current.focus();
  };

  return (
    <>
      <Textarea
        value={content}
        onChange={handleChangeContent}
        autoFocus
        isTransparent
        textColor={textColor}
        placeholder="Type task..."
        className="max-h-full md:max-h-max"
        ref={fieldRef}
      />
      <div className="mt-4 flex justify-end">
        <div className="flex gap-1 pr-2">
          <PriorityPanel
            onToggle={onToggle}
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
  priority: PropTypes.string,
  setContent: PropTypes.func,
  setPriority: PropTypes.func,
  onToggle: PropTypes.func,
  onSave: PropTypes.func,
  textColor: PropTypes.string,
  priorityBackground: PropTypes.string,
};

export default TaskManagementPanel;

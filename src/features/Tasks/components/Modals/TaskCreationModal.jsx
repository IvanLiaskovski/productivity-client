import PropTypes from "prop-types";
import { useState } from "react";
import TaskModalLayout from "../Layouts/TaskModalLayout";
import TaskCreation from "../TaskCreation/TaskCreation";
import { twMerge } from "tailwind-merge";

const TaskCreationModal = ({ date, className, children }) => {
  const [isOpen, setOpen] = useState();
  const styles = twMerge("h-full w-full", className);

  const closeCreationModal = (e) => {
    if (!e.target.closest(".content")) {
      setOpen(false);
    }
  };

  const openCreationModal = () => {
    setOpen(true);
  };

  return (
    <div className={styles} onDoubleClick={openCreationModal}>
      {children}
      {isOpen && (
        <TaskModalLayout onClose={closeCreationModal}>
          <TaskCreation
            date={date}
            onAfterSave={setOpen}
            priorityBackground="dark"
            mode="dark"
          />
        </TaskModalLayout>
      )}
    </div>
  );
};

TaskCreationModal.propTypes = {
  date: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TaskCreationModal;

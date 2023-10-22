import PropTypes from "prop-types";
import { useState } from "react";
import TaskModalLayout from "../Layouts/TaskModalLayout";
import CreateTask from "../CreateTask/CreateTask";
import { twMerge } from "tailwind-merge";

const CreateTaskModal = ({ date, className, children }) => {
  const [isOpen, setOpen] = useState();
  const styles = twMerge("h-full w-full", className);

  const closeCreateModal = (e) => {
    if (!e.target.closest(".content")) {
      setOpen(false);
    }
  };

  const openCreateModal = () => {
    setOpen(true);
  };

  return (
    <div className={styles} onDoubleClick={openCreateModal}>
      {children}
      {isOpen && (
        <TaskModalLayout onClose={closeCreateModal}>
          <CreateTask
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

CreateTaskModal.propTypes = {
  date: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CreateTaskModal;

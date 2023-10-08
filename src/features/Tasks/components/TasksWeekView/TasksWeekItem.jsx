import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import TasksDayList from "../TasksDayView/TasksDayList";
import CreateTask from "../CreateTask/CreateTask";
import TaskModalLayout from "../Layouts/TaskModalLayout";
import CreateBtn from "../../../../components/Buttons/CreateBtn";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const TasksWeekItem = ({ tasksDate, className }) => {
  const [isOpen, setOpen] = useState(false);

  const styles = twMerge(
    "flex justify-center border-x-2 border-block border-r-transparent border-opacity-80 px-2 first:border-transparent",
    className,
  );

  const openCreateModal = () => {
    setOpen(true);
  };

  const closeCreateModal = (e) => {
    if (!e.target.closest(".content")) {
      setOpen(false);
    }
  };

  return (
    <div className={styles} onDoubleClick={openCreateModal}>
      <CreateBtn className="mb-2 hidden w-full rounded-lg border-4 py-1 text-blue-100">
        <FaPlus />
      </CreateBtn>
      <TasksDayList tasksDate={tasksDate} />
      {isOpen && (
        <TaskModalLayout onClose={closeCreateModal}>
          <CreateTask
            date={tasksDate}
            onAfterSave={setOpen}
            priorityBackground="dark"
            textColor="dark"
          />
        </TaskModalLayout>
      )}
    </div>
  );
};

TasksWeekItem.propTypes = {
  tasksDate: PropTypes.string,
  className: PropTypes.string,
};

export default TasksWeekItem;

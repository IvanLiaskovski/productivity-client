import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import TasksDayList from "../TasksDayView/TasksDayList";
import CreateBtn from "../../../../components/Buttons/CreateBtn";
import { FaPlus } from "react-icons/fa";

const TasksWeekItem = ({ tasksDate, className }) => {
  const styles = twMerge(
    "flex justify-center border-x-2 border-block border-r-transparent border-opacity-80 px-2 first:border-transparent",
    className,
  );

  return (
    <div className={styles}>
      <CreateBtn className="mb-2 hidden w-full rounded-lg border-4 py-1 text-blue-100">
        <FaPlus />
      </CreateBtn>
      <TasksDayList tasksDate={tasksDate} />
    </div>
  );
};

TasksWeekItem.propTypes = {
  tasksDate: PropTypes.string,
  className: PropTypes.string,
};

export default TasksWeekItem;

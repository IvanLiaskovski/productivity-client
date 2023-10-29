import PropTypes from "prop-types";
import { useUnDoTask } from "../../hooks/useUnDoTask";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { twMerge } from "tailwind-merge";
import { ImUndo2 } from "react-icons/im";

const TaskUnDo = ({ taskId, className }) => {
  const unDoTask = useUnDoTask(taskId);
  const isDay = useCheckTasksURL("day");
  const isYear = useCheckTasksURL("year");

  const unDoStyles = twMerge(
    "text-bgBottom duration-400 absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-bgBottom transition-transform hover:scale-110 hover:opacity-90 group-hover:-translate-x-1/2 z-10",
    className,
  );

  const iconFontSize = isDay || isYear ? "text-2xl" : "";

  return (
    <button className={unDoStyles} onClick={() => unDoTask()}>
      <ImUndo2 className={iconFontSize} />
    </button>
  );
};

TaskUnDo.propTypes = {
  taskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default TaskUnDo;

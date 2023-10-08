import { useTasksDateRangeContext } from "../../context/TasksDateContext";

import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

const TasksYearSwitch = () => {
  const { date, setDate } = useTasksDateRangeContext();

  const increamentYear = () => {
    setDate(new Date(new Date(date).getFullYear() + 1, 1));
  };

  const decrementYear = () => {
    setDate(new Date(new Date(date).getFullYear() - 1, 1));
  };

  return (
    <AppearAnimation animationType="fade">
      <div className="flex">
        <button onClick={decrementYear}>
          <BsCaretLeft className="text-4xl" />
        </button>
        <div className="m-2 mx-auto flex w-3/4 items-center justify-center rounded-[10px] border-2 border-black bg-block p-4 text-3xl text-blue-100 ">
          {typeof date === "object"
            ? date.getFullYear()
            : new Date(date).getFullYear()}
        </div>
        <button onClick={increamentYear}>
          <BsCaretRight className="text-4xl" />
        </button>
      </div>
    </AppearAnimation>
  );
};

export default TasksYearSwitch;

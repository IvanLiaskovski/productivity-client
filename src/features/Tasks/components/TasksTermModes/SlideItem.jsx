import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useTasksDateRangeContext } from "../../context/TasksDateRangeContext";

const SlideItem = ({ day, weekName, isSwipe, isActive }) => {
  const { date, setDate } = useTasksDateRangeContext();

  const styles = twMerge(
    `mt-1 flex h-10 w-9 cursor-pointer items-center justify-center rounded-[10px] border-4 border-transparent 
  text-sm transition-all duration-500 md:h-14 md:w-14 md:text-base lg:h-18 lg:w-18 lg:rounded-2xl`,
    isActive
      ? "bg-blue-400 border-blue-500"
      : "bg-blue-500 hover:border-blue-500 hover:bg-blue-400",
  );

  const changeDate = () => {
    if (isSwipe) return;
    const newDate = new Date(date);
    newDate.setDate(day);

    setDate(newDate);
  };

  return (
    <div onClick={changeDate}>
      <div className="task-slider-item flex flex-col items-center">
        <span className="text-xs">{weekName}</span>
        <div className={styles}>{day}</div>
      </div>
    </div>
  );
};

SlideItem.propTypes = {
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weekName: PropTypes.string,
  isSwipe: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default SlideItem;

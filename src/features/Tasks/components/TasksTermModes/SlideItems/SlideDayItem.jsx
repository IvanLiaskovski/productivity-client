import PropTypes from "prop-types";
import { useTasksDateContext } from "../../../context/TasksDateContext";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

const SlideDayItem = ({ day, weekName, itemDate, isSwipe }) => {
  const { date, setDate } = useTasksDateContext();

  const isScreenMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isActive = itemDate === date;

  const styles = twMerge(
    `mt-1 flex h-10 w-9 cursor-pointer items-center justify-center rounded-[10px] border-4 border-transparent 
  text-sm transition-all duration-500 md:h-14 md:w-14 md:text-base lg:h-18 lg:w-18 lg:rounded-2xl`,
    isActive
      ? "bg-blue-400 border-blue-500"
      : "bg-blue-500 hover:border-blue-500 hover:bg-blue-400",
  );

  const changeDate = () => {
    if (isSwipe) return;
    setDate(itemDate);
  };

  return (
    <div onClick={changeDate}>
      <div className="flex flex-col items-center">
        <span className="text-xs">
          {isScreenMedium ? weekName : `${String(weekName).slice(0, 3)}.`}
        </span>
        <div className={styles}>{day}</div>
      </div>
    </div>
  );
};

SlideDayItem.propTypes = {
  day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weekName: PropTypes.string,
  itemDate: PropTypes.string,
  isSwipe: PropTypes.bool,
};

export default SlideDayItem;

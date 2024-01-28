import PropTypes from "prop-types";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import { twMerge } from "tailwind-merge";

const Loading = ({ q = 4 }) => {
  const isMonthOrWeek = useCheckTasksURL(["month", "week"]);
  const taskItems = [...Array(q).keys()];

  const fakeTaskStyle = twMerge(
    `w-100 relative z-50 mt-3 animate-pulse overflow-hidden rounded-2xl bg-primary-200 text-center
  font-sans font-sans shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]`,
    isMonthOrWeek
      ? "px-3 xl:px-4 md:py-1 xl:py-2 md:text-xs xl:text-base"
      : "px-8 py-2",
  );

  return (
    <div className="scrollbar-hide max-h-[60vh] w-full overflow-x-auto overflow-y-visible">
      {taskItems.map((_, index) => (
        <div key={index} className={fakeTaskStyle}>
          ...
        </div>
      ))}
    </div>
  );
};

Loading.propTypes = {
  q: PropTypes.number,
};

export default Loading;

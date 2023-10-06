import PropTypes from "prop-types";

const SlideWeekItem = ({ weekName, itemDate }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <h2 className="text-sm text-blue-100 lg:text-lg">{weekName}</h2>
      <p className="font-sans text-xs text-gray-400 lg:text-sm">{itemDate}</p>
    </div>
  );
};

SlideWeekItem.propTypes = {
  weekName: PropTypes.string,
  itemDate: PropTypes.string,
};

export default SlideWeekItem;

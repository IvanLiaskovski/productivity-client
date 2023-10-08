const SlideWeekItem = ({ weekName, itemDate }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <h2 className="text-blue-100">{weekName}</h2>
      <p className="font-sans text-sm text-gray-400">{itemDate}</p>
    </div>
  );
};

export default SlideWeekItem;

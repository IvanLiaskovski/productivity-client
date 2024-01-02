import { weekDays } from "../../../../data/weekDays";

const TasksWeeksPanel = () => {
  return (
    <div className=" z-0 my-2 grid w-full grid-cols-7 rounded py-1 text-center text-white">
      {weekDays.map((item) => (
        <div key={item} className="text-center text-sm">
          <h5>{item}</h5>
        </div>
      ))}
    </div>
  );
};

export default TasksWeeksPanel;

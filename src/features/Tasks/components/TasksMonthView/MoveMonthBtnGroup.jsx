import MoveBack from "./Buttons/MoveBack";
import MoveForward from "./Buttons/MoveForward";

const MoveMonthBtnGroup = () => {
  return (
    <div className="float-right">
      <MoveBack />
      <MoveForward />
    </div>
  );
};

export default MoveMonthBtnGroup;

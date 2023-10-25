import MoveBackByYear from "./Buttons/MoveBackByYear";
import MoveForwardByYear from "./Buttons/MoveForwardByYear";

const MoveYearBtnGroup = () => {
  return (
    <div className="float-right">
      <MoveBackByYear />
      <MoveForwardByYear />
    </div>
  );
};

export default MoveYearBtnGroup;

import useMoveDate from "../../../hooks/useMoveDate";
import MoveMonthBtn from "../../TasksMonthView/Buttons/MoveMonthBtn";
import { FaChevronRight } from "react-icons/fa";

const MoveForwardByYear = () => {
  const moveMonthForward = useMoveDate();

  const handleMoveMonth = () => {
    moveMonthForward(1, true, "years");
  };

  return (
    <MoveMonthBtn onClick={handleMoveMonth}>
      <FaChevronRight className="text-lg" />
    </MoveMonthBtn>
  );
};

export default MoveForwardByYear;

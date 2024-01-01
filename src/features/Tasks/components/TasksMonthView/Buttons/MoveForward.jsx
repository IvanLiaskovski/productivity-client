import useMoveDate from "../../../hooks/useMoveDate";
import MoveMonthBtn from "./MoveMonthBtn";
import { FaChevronRight } from "react-icons/fa";


const MoveForward = () => {
  const moveMonthForward = useMoveDate();

  const handleMoveMonth = () => {
    moveMonthForward(1, true, "months");
  };

  return (
    <MoveMonthBtn onClick={handleMoveMonth}>
      <FaChevronRight className="text-lg" />
    </MoveMonthBtn>
  );
};

export default MoveForward;

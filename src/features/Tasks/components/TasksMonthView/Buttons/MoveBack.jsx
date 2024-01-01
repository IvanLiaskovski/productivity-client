import useMoveDate from "../../../hooks/useMoveDate";
import MoveMonthBtn from "./MoveMonthBtn";
import { FaChevronLeft } from "react-icons/fa";

const MoveBack = () => {
  const moveDate = useMoveDate();

  const handleMoveDateBack = () => {
    moveDate(-1, true, "months");
  };

  return (
    <MoveMonthBtn onClick={handleMoveDateBack}>
      <FaChevronLeft className="text-lg" />
    </MoveMonthBtn>
  );
};

export default MoveBack;

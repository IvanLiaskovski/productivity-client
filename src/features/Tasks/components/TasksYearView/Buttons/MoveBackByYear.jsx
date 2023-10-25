import useMoveDate from "../../../hooks/useMoveDate";
import MoveMonthBtn from "../../TasksMonthView/Buttons/MoveMonthBtn";
import { FaChevronLeft } from "react-icons/fa";

const MoveBackByYear = () => {
  const moveDate = useMoveDate();

  const handleMoveDateBack = () => {
    moveDate(-1, true, "years");
  };

  return (
    <MoveMonthBtn onClick={handleMoveDateBack}>
      <FaChevronLeft className="text-lg" />
    </MoveMonthBtn>
  );
};

export default MoveBackByYear;

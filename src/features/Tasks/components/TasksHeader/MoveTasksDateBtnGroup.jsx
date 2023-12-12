import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import MoveTasksDateBtn from "../Buttons/MoveTasksDateBtn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MoveTasksDateBtnGroup = () => {
  const isMonth = useCheckTasksURL("month");

  const unit = isMonth ? "months" : "years";

  return (
    <div>
      <MoveTasksDateBtn moveBy={-1} moveByUnit={unit}>
        <FaChevronLeft />
      </MoveTasksDateBtn>
      <MoveTasksDateBtn moveBy={1} moveByUnit={unit}>
        <FaChevronRight />
      </MoveTasksDateBtn>
    </div>
  );
};

export default MoveTasksDateBtnGroup;

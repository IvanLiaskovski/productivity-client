import moment from "moment";
import { useTasksDatesRangeContext } from "../context/TasksDatesRangeContext";

const useMoveDateRange = () => {
  const { datesRange, setDatesRange } = useTasksDatesRangeContext();

  function moveDate(weeksAmount, allowChange, moveBy = "weeks") {
    if (allowChange) {
      setDatesRange(
        moment(datesRange).add(weeksAmount, moveBy).format("YYYY-MM-DD"),
      );
      return;
    }
  }

  return moveDate;
};

export default useMoveDateRange;

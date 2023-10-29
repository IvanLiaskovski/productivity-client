import moment from "moment";
import { useTasksDatesRangeContext } from "../context/TasksDatesRangeContext";

const useMoveDateRange = () => {
  const { datesRange, setDatesRange } = useTasksDatesRangeContext();

  function moveDate(weeksAmount, allowChange) {
    if (allowChange) {
      setDatesRange(
        moment(datesRange).add(weeksAmount, "weeks").format("YYYY-MM-DD"),
      );
      return;
    }
  }

  return moveDate;
};

export default useMoveDateRange;

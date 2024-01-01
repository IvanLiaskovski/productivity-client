import moment from "moment";
import { useTasksDateContext } from "../context/TasksDateContext";

const useMoveDate = () => {
  const { date, setDate } = useTasksDateContext();

  function moveDate(weeksAmount, allowChange, moveBy = "weeks") {
    if (allowChange) {
      setDate(moment(date).add(weeksAmount, moveBy).format("YYYY-MM-DD"));
      return;
    }
  }

  return moveDate;
};

export default useMoveDate;

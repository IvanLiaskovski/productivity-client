import { useTasksDateRangeContext } from "../context/TasksDateRangeContext";
import { useDispatch, useSelector } from "react-redux";
import { selectTasksMode, setTasksMode } from "../tasksSlice";

export function useTasksMode() {
  const { setDate } = useTasksDateRangeContext();
  const mode = useSelector(selectTasksMode);
  const dispatch = useDispatch();

  const changeMode = (mode) => () => {
    dispatch(setTasksMode(mode));
    setDate(new Date());
  };

  return [mode, changeMode];
}

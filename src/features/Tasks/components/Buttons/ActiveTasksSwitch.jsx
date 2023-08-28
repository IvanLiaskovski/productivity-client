import { useDispatch, useSelector } from "react-redux";
import { setTasksOnlyActive, selectTasksOnlyActive } from "../../tasksSlice";
import SwitchBtn from "../../../../components/Buttons/SwitchBtn";

const ActiveTasksSwitch = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectTasksOnlyActive);

  const switchTaskMode = () => {
    dispatch(setTasksOnlyActive(!isActive));
  };

  return (
    <div className="flex justify-end transition-all">
      <SwitchBtn onClick={switchTaskMode} isActive={isActive}>
        Only Active
      </SwitchBtn>
    </div>
  );
};

export default ActiveTasksSwitch;

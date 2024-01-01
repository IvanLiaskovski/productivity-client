import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setTasksOnlyActive, selectTasksOnlyActive } from "../../tasksSlice";
import SwitchBtn from "../../../../components/Buttons/SwitchBtn";
import { twMerge } from "tailwind-merge";

const ActiveTasksSwitch = ({ className }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectTasksOnlyActive);

  const styles = twMerge("flex justify-end transition-all", className);

  const switchTaskMode = () => {
    dispatch(setTasksOnlyActive(!isActive));
  };

  return (
    <div className={styles}>
      <SwitchBtn onClick={switchTaskMode} isActive={isActive}>
        Only Active
      </SwitchBtn>
    </div>
  );
};

ActiveTasksSwitch.propTypes = {
  className: PropTypes.string,
};

export default ActiveTasksSwitch;

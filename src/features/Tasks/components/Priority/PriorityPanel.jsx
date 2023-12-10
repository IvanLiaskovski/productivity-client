import PropTypes from "prop-types";
import PriorityBtn from "./PriorityBtn";
import { ImFlag } from "react-icons/im";
import { PRIORITY_ARR } from "../../../../data/priorityData";

const PriorityPanel = ({
  priorityHandler,
  activePriority,
  backgroundColor,
}) => (
  <div className="flex gap-1 pr-2">
    {PRIORITY_ARR.map((priority) => (
      <PriorityBtn
        key={priority}
        priority={priority}
        setPriority={priorityHandler}
        isActive={priority === activePriority}
        backgroundColor={backgroundColor}
      >
        <ImFlag className="fix-blurry" />
      </PriorityBtn>
    ))}
  </div>
);

PriorityPanel.propTypes = {
  priorityHandler: PropTypes.func,
  activePriority: PropTypes.oneOf(PRIORITY_ARR),
  backgroundColor: PropTypes.string,
};

export default PriorityPanel;

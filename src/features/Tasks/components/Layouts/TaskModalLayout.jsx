import PropTypes from "prop-types";
import useCheckTasksURL from "../../hooks/useCheckTasksURL";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";
import Modal from "../../../../components/Modals/Modal";

const TaskModalLayout = ({ onClose, children }) => {
  const isWeek = useCheckTasksURL("week");

  return isWeek ? (
    <>
      ...
      <Modal onClose={onClose}>{children}</Modal>
    </>
  ) : (
    <AppearAnimation
      className="group/actions relative h-auto p-2 md:p-4"
      animationType="fade"
    >
      {children}
    </AppearAnimation>
  );
};

TaskModalLayout.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TaskModalLayout;

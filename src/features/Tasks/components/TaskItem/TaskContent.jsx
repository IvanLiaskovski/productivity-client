import PropTypes from "prop-types";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

const TaskContent = ({ content = "..." }) => {
  return (
    <AppearAnimation className="relative z-10" animationType="slideDown" reset>
      <pre className="relative z-20 break-words bg-transparent font-sans">
        {content}
      </pre>
    </AppearAnimation>
  );
};

TaskContent.propTypes = {
  content: PropTypes.string,
};

export default TaskContent;

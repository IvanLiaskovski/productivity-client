import PropTypes from "prop-types";
import { useState } from "react";
import { useGetTaskIds } from "../../hooks/useGetTaskIds";
import { useTransition, animated } from "react-spring";
import TaskItem from "../TaskItem/TaskItem";
import TaskTooltip from "../TaskTooltip/TaskTooltip";

const TasksDayList = ({ tasksDate }) => {
  const tasks = useGetTaskIds(tasksDate);
  const [editableTaskId, setEditableTaskId] = useState("");

  const transitions = useTransition(tasks, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      maxHeight: "0px",
    },
    enter: (_, index) => async (next) => {
      await next({
        opacity: 1,
        transform: "scale(1)",
        delay: countAnimationDelay(index),
        maxHeight: "1500px",
      });
    },
    leave: (_, index) => async (next) => {
      await next({
        opacity: 0,
        transform: "scale(0)",
        delay: countAnimationDelay(index),
        maxHeight: "0px",
      });
    },
    config: { duration: 400 },
    key: (taskId) => taskId,
  });

  return (
    <div className="scrollbar-hide max-h-[60vh] w-full overflow-x-auto overflow-y-visible">
      {transitions(
        (styles, taskId) =>
          taskId && (
            <div key={taskId}>
              <animated.div className="h-fit" style={styles}>
                <TaskItem
                  taskId={taskId}
                  key={taskId}
                  isOpen={editableTaskId === taskId}
                  setOpen={setEditableTaskId}
                />
              </animated.div>
              {editableTaskId !== taskId && <TaskTooltip taskId={taskId} />}
            </div>
          ),
      )}
    </div>
  );
};

TasksDayList.propTypes = {
  tasksDate: PropTypes.string,
};

const countAnimationDelay = (index) => (index * 20 < 800 ? index * 20 : 800);

export default TasksDayList;

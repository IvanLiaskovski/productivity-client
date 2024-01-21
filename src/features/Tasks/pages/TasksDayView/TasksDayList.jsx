import PropTypes from "prop-types";
import { useState } from "react";
import { useGetTaskIds } from "../../hooks/useGetTaskIds";
import { useTransition, animated } from "react-spring";
import { twMerge } from "tailwind-merge";

import TaskItem from "../../components/TaskItem/TaskItem";
import TaskDraggable from "../../components/TaskItem/TaskDraggable";
import TaskTooltip from "../../components/TaskTooltip/TaskTooltip";
import ErrorPopup from "../../../../components/Errors/ErrorPopup/ErrorPopup";
import Loading from "./Loading";

const TasksDayList = ({
  tasksDate,
  tasksType = "day",
  allowTooltip = true,
  cancel,
  className,
}) => {
  const { isLoading, tasks, isError, error } = useGetTaskIds(
    tasksDate,
    tasksType,
  );
  const [editableTaskId, setEditableTaskId] = useState("");

  const styles = twMerge(
    "scrollbar-hide max-h-[60vh] w-full overflow-x-auto overflow-y-visible",
    className,
  );

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

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <ErrorPopup>{error}</ErrorPopup>
  ) : (
    <div className={styles}>
      {transitions(
        (styles, taskId) =>
          taskId && (
            <div key={taskId}>
              <animated.div className="h-fit" style={cancel ? {} : styles}>
                <TaskDraggable taskId={taskId}>
                  <TaskItem
                    taskId={taskId}
                    isOpen={editableTaskId === taskId}
                    setOpen={setEditableTaskId}
                  />
                </TaskDraggable>
              </animated.div>
              {editableTaskId !== taskId && allowTooltip && (
                <TaskTooltip taskId={taskId} />
              )}
            </div>
          ),
      )}
    </div>
  );
};

TasksDayList.propTypes = {
  tasksDate: PropTypes.string,
  tasksType: PropTypes.oneOf(["day", "year"]),
  allowTooltip: PropTypes.bool,
  cancel: PropTypes.bool,
  className: PropTypes.string,
};

const countAnimationDelay = (index) => (index * 20 < 800 ? index * 20 : 800);

export default TasksDayList;

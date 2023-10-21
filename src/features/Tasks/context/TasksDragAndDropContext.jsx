import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTask } from "../tasksSlice";
import {
  MouseSensor,
  TouchSensor,
  DndContext,
  DragOverlay,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import TaskItem from "../components/TaskItem/TaskItem";

const TasksDragAndDropContext = ({
  activeTaskId,
  setActiveTaskId,
  children,
}) => {
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
  );

  function handleDragStart(event) {
    setActiveTaskId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const date = over.id;
    const id = active.id;
    dispatch(updateTask({ id, date }));
    setActiveTaskId(null);
  }
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      {children}
      <DragOverlay>
        {activeTaskId ? (
          <TaskItem taskId={activeTaskId} isOpen={false} hideActions={true} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

TasksDragAndDropContext.propTypes = {
  activeTaskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setActiveTaskId: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TasksDragAndDropContext;

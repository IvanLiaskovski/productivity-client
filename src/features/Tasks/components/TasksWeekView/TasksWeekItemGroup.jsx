import PropTypes from "prop-types";
import { useMemo } from "react";
import { createWeekDatesRange } from "../../helpers/tasksHelpers";
import {
  MouseSensor,
  TouchSensor,
  DndContext,
  DragOverlay,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import TasksWeekItem from "./TasksWeekItem";
import TaskItem from "../TaskItem/TaskItem";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateTask } from "../../tasksSlice";

const TasksWeekItemGroup = ({ datesRange }) => {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState();
  const allowTooltip = !activeId;

  const dateItems = useMemo(
    () => createWeekDatesRange(datesRange).slice(7, 14),
    [datesRange],
  );

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
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const date = over.id;
    const id = active.id;
    dispatch(updateTask({ id, date }));
    setActiveId(null);
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className="grid min-h-[400px] grid-cols-7 justify-start px-2 lg:px-10">
        {dateItems.map((item) => (
          <TasksWeekItem
            key={item.itemDate}
            tasksDate={item.itemDate}
            allowTooltip={allowTooltip}
          />
        ))}
        <DragOverlay>
          {activeId ? (
            <TaskItem taskId={activeId} isOpen={false} hideActions={true} />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

TasksWeekItemGroup.propTypes = {
  datesRange: PropTypes.string,
};

export default TasksWeekItemGroup;

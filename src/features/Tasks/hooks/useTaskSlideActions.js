import { useEffect, useState } from "react";
import useTaskComplete from "./useTaskComplete";
import useTaskDelete from "./useTaskDelete";
import { SLIDE_ACTIONS } from "../../../data/actionsData";

export function useTaskSlideActions(taskId) {
  const [startPoint, setStartPoint] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [action, setAction] = useState(SLIDE_ACTIONS.complete);
  const [progress, setProgress] = useState(0);

  const completeTask = useTaskComplete(taskId);
  const deleteTask = useTaskDelete(taskId);

  const handleInteractionStart = (e) => {
    setIsInteracting(true);
    setStartPoint(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    setStartPoint(0);

    if (progress < 1) {
      setProgress(0);
    }
  };

  const handleInteractionMove = (e) => {
    if (!isInteracting) return;
    const { width } = e.target.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    setAction(
      clientX >= startPoint ? SLIDE_ACTIONS.complete : SLIDE_ACTIONS.delete,
    );
    setProgress(moveInteractionProgress(startPoint, clientX, width));
  };

  useEffect(() => {
    if (progress === 1 && !isInteracting) {
      if (action === SLIDE_ACTIONS.complete) {
        completeTask();
      }

      if (action === SLIDE_ACTIONS.delete) {
        deleteTask();
      }
    }
  }, [progress, action, isInteracting, completeTask, deleteTask]);

  return [
    progress,
    action,
    handleInteractionStart,
    handleInteractionEnd,
    handleInteractionMove,
  ];
}

function moveInteractionProgress(startPoint, clientX, width) {
  const rangeDifference = Math.abs(startPoint - clientX);
  return Math.min(Math.max(rangeDifference / (width / 1.5), 0), 1);
}

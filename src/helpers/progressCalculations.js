import { PRIORITY_PRECIOUS } from "../data/priorityData";

export default function progressCalculations(items) {
  const calculations = items.reduce(
    (acumulator, task) => {
      if (task.isCompleted) {
        acumulator.completed += PRIORITY_PRECIOUS[task.priority] || 0;
      }
      acumulator.all += PRIORITY_PRECIOUS[task.priority] || 0;

      return acumulator;
    },
    {
      all: 0,
      completed: 0,
    },
  );

  return (calculations.completed * 100) / calculations.all || 0;
}

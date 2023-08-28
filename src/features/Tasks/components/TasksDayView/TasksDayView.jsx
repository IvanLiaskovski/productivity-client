import TasksDayList from "./TasksDayList";
import CreateTaskPanel from "../CreateTaskPanel/CreateTaskPanel";
import TasksTermModes from "../TasksTermModes/TasksTermModes";

function TasksDayView() {
  return (
    <>
      <TasksTermModes />
      <TasksDayList />
      <CreateTaskPanel />
    </>
  );
}

export default TasksDayView;

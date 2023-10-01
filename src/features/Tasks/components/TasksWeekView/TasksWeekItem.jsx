import TasksDayList from "../TasksDayView/TasksDayList";

const TasksWeekItem = ({ tasksDate }) => {
  return (
    <div>
      <TasksDayList tasksDate={tasksDate} />
    </div>
  );
};

export default TasksWeekItem;

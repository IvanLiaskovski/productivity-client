import { TasksDateRangeProvider } from "./context/TasksDateRangeContext";

import TasksDayView from "./components/TasksDayView/TasksDayView";
import TasksHeader from "./components/TasksHeader/TasksHeader";

function Tasks() {
  return (
    <TasksDateRangeProvider>
      <div className="md:w-[100vw - 128px] max-h-screen md:ml-[128px] md:pb-7">
        <div className="container mx-auto max-w-6xl px-5 pt-14 md:flex md:min-h-screen md:flex-col">
          <TasksHeader />
          <TasksDayView />
        </div>
      </div>
    </TasksDateRangeProvider>
  );
}

export default Tasks;

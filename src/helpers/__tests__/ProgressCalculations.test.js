import { renderHook } from "@testing-library/react";
import { useGetTasks } from "../../features/Tasks/hooks/useGetTasks";
import progressCalculations from "../progressCalculations";
import store from "../../app/store";
import { Provider } from "react-redux";
import { TasksDateRangeProvider } from "../../features/Tasks/context/TasksDateRangeContext";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Count the percentage of tasks", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateRangeProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateRangeProvider>
    </Provider>
  );
  const { result } = renderHook(() => useGetTasks(), { wrapper });
  const tasks = result.current.map((item) => {
    if (item.id === 1) {
      return {
        ...item,
        isCompleted: true,
      };
    }

    return item;
  });

  expect(progressCalculations(tasks)).toBeCloseTo(66.67);
});

import { renderHook } from "@testing-library/react";
import { useGetTasks } from "../../features/Tasks/hooks/useGetTasks";
import progressCalculations from "../progressCalculations";
import store from "../../app/store";
import { Provider } from "react-redux";
import { TasksDateProvider } from "../../features/Tasks/context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../features/Tasks/context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Count the percentage of tasks", () => {
  const wrapper = ({ children }) => (
    <MemoryRouter>
      <Provider store={store}>
        <TasksDatesRangeProvider>
          <TasksDateProvider {...mockTasksRangeDateContext}>
            {children}
          </TasksDateProvider>
        </TasksDatesRangeProvider>
      </Provider>
    </MemoryRouter>
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

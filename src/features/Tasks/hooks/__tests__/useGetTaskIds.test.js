import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";
import { useGetTaskIds } from "../useGetTaskIds";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("useGetTaskIds correctly retrieves task IDs from Redux store", () => {
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
  const { result } = renderHook(
    () => useGetTaskIds(mockTasksRangeDateContext.date, "day"),
    { wrapper },
  );

  expect(result.current.tasks).toHaveLength(3);
  expect(result.current.tasks[0]).toBeGreaterThanOrEqual(1);
});

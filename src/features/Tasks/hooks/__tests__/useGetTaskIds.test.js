import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { TasksDateRangeProvider } from "../../context/TasksDateRangeContext";
import { useGetTaskIds } from "../useGetTaskIds";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("useGetTaskIds correctly retrieves task IDs from Redux store", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateRangeProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateRangeProvider>
    </Provider>
  );
  const { result } = renderHook(() => useGetTaskIds(), { wrapper });

  expect(result.current).toHaveLength(3);
  expect(result.current[0]).toBeGreaterThanOrEqual(1);
});

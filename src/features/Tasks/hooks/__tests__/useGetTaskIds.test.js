import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { useGetTaskIds } from "../useGetTaskIds";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("useGetTaskIds correctly retrieves task IDs from Redux store", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateProvider>
    </Provider>
  );
  const { result } = renderHook(() => useGetTaskIds(), { wrapper });

  expect(result.current).toHaveLength(3);
  expect(result.current[0]).toBeGreaterThanOrEqual(1);
});

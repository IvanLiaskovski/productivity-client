import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { TasksDateRangeProvider } from "../../context/TasksDateRangeContext";
import { useGetTasks } from "../useGetTasks";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Ensure useGetTasks retrieves tasks contents from Redux store accurately", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateRangeProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateRangeProvider>
    </Provider>
  );
  const { result } = renderHook(() => useGetTasks(), { wrapper });

  expect(result.current).toHaveLength(3);
  expect(result.current[0].content).not.toBeUndefined();
});

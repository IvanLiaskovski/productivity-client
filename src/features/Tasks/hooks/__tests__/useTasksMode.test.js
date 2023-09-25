import { renderHook, act, waitFor } from "@testing-library/react";
import { TasksDateRangeProvider } from "../../context/TasksDateRangeContext";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { useTasksMode } from "../useTasksMode";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("useTasksMode Hook - Mode Change", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateRangeProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateRangeProvider>
    </Provider>
  );
  const { result } = renderHook(() => useTasksMode(), { wrapper });
  const [, changeMode] = result.current;

  expect(store.getState().tasks.mode).toBe("day");
  expect(result.current[0]).toBe("day");

  act(() => changeMode("year"));

  waitFor(() => {
    expect(store.getState().tasks.mode).toBe("year");
    expect(result.current[0]).toBe("year");
  });
});

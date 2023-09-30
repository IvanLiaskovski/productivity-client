import { renderHook, act, waitFor } from "@testing-library/react";
import { TasksDateProvider } from "../../context/TasksDateContext";
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
      <TasksDateProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateProvider>
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

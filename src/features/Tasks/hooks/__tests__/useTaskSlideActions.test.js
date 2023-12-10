import { renderHook } from "@testing-library/react";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { SLIDE_ACTIONS } from "../../../../data/actionsData";
import { useTaskSlideActions } from "../useTaskSlideActions";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("useTaskSlideActions for Expected Functions and Properties", () => {
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
  const { result } = renderHook(() => useTaskSlideActions(), { wrapper });
  const [
    progress,
    action,
    handleInteractionStart,
    handleInteractionEnd,
    handleInteractionMove,
  ] = result.current;

  expect(progress).toEqual(0);
  expect(action).toBe(SLIDE_ACTIONS.complete);
  expect(handleInteractionStart).not.toBeUndefined();
  expect(handleInteractionEnd).not.toBeUndefined();
  expect(handleInteractionMove).not.toBeUndefined();
});

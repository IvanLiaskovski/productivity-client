import { renderHook, act, waitFor } from "@testing-library/react";
import { TasksDateRangeProvider } from "../../context/TasksDateRangeContext";
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
    <Provider store={store}>
      <TasksDateRangeProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateRangeProvider>
    </Provider>
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

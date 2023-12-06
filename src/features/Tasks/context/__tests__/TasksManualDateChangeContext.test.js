import { renderHook, act } from "@testing-library/react";
import { TasksManualDateChangeProvider } from "../TasksManualDateChangeContext";
import { useManualDateChangeContext } from "../TasksManualDateChangeContext";

test("TasksManualDateChangeProvider - should set manual date change to true", () => {
  const wrapper = ({ children }) => (
    <TasksManualDateChangeProvider>{children}</TasksManualDateChangeProvider>
  );

  const { result } = renderHook(() => useManualDateChangeContext(), {
    wrapper,
  });

  act(() => {
    result.current.setManualChange(true);
  });

  expect(result.current.isManualChange).toBe(true);
});

import { renderHook, act } from "@testing-library/react";
import { TasksManualDateChangeProvider } from "../TasksManualDateChangeContext";
import { useManualDateChangeContext } from "../TasksManualDateChangeContext";

const mockuManualDateChange = {
  isManualChange: false,
  setManualChange: jest.fn(
    (value) => (mockuManualDateChange.isManualChange = value),
  ),
};

test("TasksManualDateChangeProvider - should set manual date change to true", () => {
  const wrapper = ({ children }) => (
    <TasksManualDateChangeProvider {...mockuManualDateChange}>
      {children}
    </TasksManualDateChangeProvider>
  );

  const { result } = renderHook(() => useManualDateChangeContext(), {
    wrapper,
  });

  act(() => {
    result.current.setManualChange(true);
  });

  expect(mockuManualDateChange.setManualChange).toBeCalled();
  expect(mockuManualDateChange.isManualChange).toBe(true);
});

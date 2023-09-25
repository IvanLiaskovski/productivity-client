import { renderHook, act } from "@testing-library/react";
import { TasksDateRangeProvider } from "../TasksDateRangeContext";
import { useTasksDateRangeContext } from "../TasksDateRangeContext";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

const mockDate = "2023-07-12";

test("TasksDateRangeProvider - set tasks range date", () => {
  const wrapper = ({ children }) => (
    <TasksDateRangeProvider {...mockTasksRangeDateContext}>
      {children}
    </TasksDateRangeProvider>
  );

  const { result } = renderHook(() => useTasksDateRangeContext(), { wrapper });

  act(() => {
    result.current.setDate(mockDate);
  });

  expect(mockTasksRangeDateContext.setDate).toBeCalled();
  expect(mockTasksRangeDateContext.date).toBe(mockDate);
});

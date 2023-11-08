import { renderHook, act } from "@testing-library/react";
import { TasksDateProvider } from "../TasksDateContext";
import { useTasksDateContext } from "../TasksDateContext";
import moment from "moment";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

const mockDate = moment().format("YYYY-MM-DD");

test("TasksDateRangeProvider - set tasks range date", () => {
  const wrapper = ({ children }) => (
    <TasksDateProvider {...mockTasksRangeDateContext}>
      {children}
    </TasksDateProvider>
  );

  const { result } = renderHook(() => useTasksDateContext(), { wrapper });

  act(() => {
    result.current.setDate(mockDate);
  });

  expect(mockTasksRangeDateContext.setDate).toBeCalled();
  expect(mockTasksRangeDateContext.date).toBe(mockDate);
});

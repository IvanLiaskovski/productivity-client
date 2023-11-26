import { renderHook, act } from "@testing-library/react";
import { TasksDateProvider } from "../TasksDateContext";
import { useTasksDateContext } from "../TasksDateContext";
import moment from "moment";

const mockDate = moment().format("YYYY-MM-DD");

test("TasksDateRangeProvider - set tasks range date", () => {
  const wrapper = ({ children }) => (
    <TasksDateProvider>{children}</TasksDateProvider>
  );

  const { result } = renderHook(() => useTasksDateContext(), { wrapper });

  act(() => {
    result.current.setDate(mockDate);
  });

  expect(result.current.date).toBe(mockDate);
});

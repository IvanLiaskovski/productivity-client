import { renderHook, act } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { TasksDateProvider } from "../TasksDateContext";
import { TasksDatesRangeProvider } from "../TasksDatesRangeContext";
import { useTasksDateContext } from "../TasksDateContext";
import moment from "moment";

const mockDate = moment().format("YYYY-MM-DD");

test("TasksDateRangeProvider - set tasks range date", () => {
  const wrapper = ({ children }) => (
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider>{children}</TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>
  );

  const { result } = renderHook(() => useTasksDateContext(), { wrapper });

  act(() => {
    result.current.setDate(mockDate);
  });

  expect(result.current.date).toBe(mockDate);
});

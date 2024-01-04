import { renderHook } from "@testing-library/react";
import { useGetTasks } from "../../hooks/useGetTasks";
import { createMonthDatesRange } from "../tasksHelpers";
import { sortTasks } from "../tasksHelpers";
import store from "../../../../app/store";
import moment from "moment";
import { Provider } from "react-redux";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

const currentDate = moment();

test("Create month days array", () => {
  const monthDays = createMonthDatesRange(
    currentDate.clone().format("YYYY-MM-DD"),
  );
  const expectedValue = {
    monthName: currentDate
      .clone()
      .startOf("month")
      .startOf("isoWeek")
      .format("MMMM"),
    weekName: currentDate
      .clone()
      .startOf("month")
      .startOf("isoWeek")
      .format("dddd"),
    day: currentDate.clone().startOf("month").startOf("isoWeek").date(),
    year: currentDate.clone().startOf("month").startOf("isoWeek").year(),
    itemDate: currentDate
      .clone()
      .startOf("month")
      .startOf("isoWeek")
      .format("YYYY-MM-DD"),
  };

  expect(monthDays[0]).toEqual(expectedValue);
});

test("Sort tasks by priority", () => {
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
  const { result } = renderHook(() => useGetTasks(), { wrapper });
  const tasks = sortTasks(result.current);

  expect(tasks[0].priority).toBe("urgent");
});

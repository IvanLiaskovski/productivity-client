import { renderHook } from "@testing-library/react";
import { useGetTasks } from "../../hooks/useGetTasks";
import { createMonthDaysArray } from "../tasksHelpers";
import { sortTasks } from "../tasksHelpers";
import store from "../../../../app/store";
import { Provider } from "react-redux";
import { TasksDateProvider } from "../../context/TasksDateContext";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Create month days array", () => {
  const monthDays = createMonthDaysArray("2023-08-01");
  const expectedValue = {
    weekName: "Tue.",
    day: 1,
    year: 2023,
    date: "2023-08-01",
  };

  expect(monthDays[0]).toEqual(expectedValue);
});

test("Sort tasks by priority", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateProvider>
    </Provider>
  );
  const { result } = renderHook(() => useGetTasks(), { wrapper });
  const tasks = sortTasks(result.current);

  expect(tasks[0].priority).toBe("urgent");
});

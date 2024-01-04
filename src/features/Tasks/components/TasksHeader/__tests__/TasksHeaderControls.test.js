import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import { TasksDateProvider } from "../../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../../context/TasksDatesRangeContext";
import TasksHeaderControls from "../TasksHeaderControls";
import { MemoryRouter } from "react-router";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Change tasks mode", async () => {
  render(
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider {...mockTasksRangeDateContext}>
          <TasksHeaderControls />
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>,
  );

  const changeToDayMode = screen.getByRole("link", { name: "Day" });
  const changeToYearMode = screen.getByRole("link", { name: "Year" });

  expect(changeToDayMode).toBeInTheDocument();
  expect(changeToYearMode).toBeInTheDocument();
});

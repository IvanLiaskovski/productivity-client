import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../../../../app/store";
import { TasksDateRangeProvider } from "../../../context/TasksDateRangeContext";
import TasksHeaderControls from "../TasksHeaderControls";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Change tasks mode", async () => {
  render(
    <TasksDateRangeProvider {...mockTasksRangeDateContext}>
      <TasksHeaderControls />
    </TasksDateRangeProvider>,
  );

  const changeToDayMode = screen.getByRole("button", { name: "Day" });
  const changeToYearMode = screen.getByRole("button", { name: "Year" });

  expect(changeToDayMode).toBeInTheDocument();
  expect(changeToYearMode).toBeInTheDocument();

  await userEvent.click(changeToDayMode);
  expect(getTasksMode()).toBe("day");

  await userEvent.click(changeToYearMode);
  expect(getTasksMode()).toBe("year");
});

const getTasksMode = () => store.getState().tasks.mode;

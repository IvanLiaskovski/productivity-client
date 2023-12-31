import { render } from "../../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDateProvider } from "../../../../context/TasksDateContext";
import SlideDayItem from "../SlideDayItem";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Change view date", async () => {
  render(
    <TasksDateProvider {...mockTasksRangeDateContext}>
      <SlideDayItem day={"23"} weekName="Sunday" />
    </TasksDateProvider>,
  );

  const day = screen.getByText("23");
  const week = screen.getByText("Sun.");

  expect(day).toBeInTheDocument();
  expect(week).toBeInTheDocument();

  await userEvent.click(day);

  expect(mockTasksRangeDateContext.setDate).toBeCalledTimes(1);
});

test("Skip change view date if swipe", async () => {
  render(
    <TasksDateProvider {...mockTasksRangeDateContext}>
      <SlideDayItem day={"23"} weekName="Sunday" isSwipe />
    </TasksDateProvider>,
  );

  const day = screen.getByText("23");

  await userEvent.click(day);
  expect(mockTasksRangeDateContext.setDate).toBeCalledTimes(1);
});

import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDateRangeProvider } from "../../../context/TasksDateRangeContext";
import SlideItem from "../SlideItem";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Change view date", async () => {
  render(
    <TasksDateRangeProvider {...mockTasksRangeDateContext}>
      <SlideItem day={"23"} weekName="Sunday" />
    </TasksDateRangeProvider>,
  );

  const day = screen.getByText("23");
  const week = screen.getByText("Sunday");

  expect(day).toBeInTheDocument();
  expect(week).toBeInTheDocument();

  await userEvent.click(day);

  expect(mockTasksRangeDateContext.setDate).toBeCalledTimes(1);
});

test("Skip change view date if swipe", async () => {
  render(
    <TasksDateRangeProvider {...mockTasksRangeDateContext}>
      <SlideItem day={"23"} weekName="Sunday" isSwipe />
    </TasksDateRangeProvider>,
  );

  const day = screen.getByText("23");

  await userEvent.click(day);
  expect(mockTasksRangeDateContext.setDate).toBeCalledTimes(1);
});

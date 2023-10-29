import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDateProvider } from "../../../context/TasksDateContext";
import MoveTasksDateBtn from "../MoveTasksDateBtn";
import moment from "moment";

const mockTasksDateContext = {
  date: moment().format("YYYY-MM-DD"),
  setDate: (date) => (mockTasksDateContext.date = date),
};

describe("MoveTasksDateBtn button tests", () => {
  afterEach(() => {
    mockTasksDateContext.date = moment().format("YYYY-MM-DD");
  });

  test("Should move date 1 month forward", async () => {
    render(
      <TasksDateProvider {...mockTasksDateContext}>
        <MoveTasksDateBtn moveBy={1} moveByUnit="months" />
      </TasksDateProvider>,
    );

    const button = screen.getByRole("button");

    expect(moment(mockTasksDateContext.date).month()).toBe(moment().month());
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(moment(mockTasksDateContext.date).month()).toBe(
      moment().add(1, "months").month(),
    );
  });

  test("Should move date 1 year backward", async () => {
    render(
      <TasksDateProvider {...mockTasksDateContext}>
        <MoveTasksDateBtn moveBy={-1} moveByUnit="years" />
      </TasksDateProvider>,
    );

    const button = screen.getByRole("button");

    expect(moment(mockTasksDateContext.date).month()).toBe(moment().month());
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(moment(mockTasksDateContext.date).year()).toBe(
      moment().add(-1, "years").year(),
    );
  });
});

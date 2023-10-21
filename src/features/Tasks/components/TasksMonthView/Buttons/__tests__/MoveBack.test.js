import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDateProvider } from "../../../../context/TasksDateContext";
import MoveBack from "../MoveBack";
import moment from "moment";

const mockTasksDateContext = {
  date: moment().format("YYYY-MM-DD"),
  setDate: (date) => (mockTasksDateContext.date = date),
};

describe("MoveBack button tests", () => {
  test("Should move date 1 month backward", async () => {
    render(
      <TasksDateProvider {...mockTasksDateContext}>
        <MoveBack />
      </TasksDateProvider>,
    );

    const button = screen.getByRole("button");

    expect(moment(mockTasksDateContext.date).month()).toBe(moment().month());
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(moment(mockTasksDateContext.date).month()).toBe(
      moment().add(-1, "months").month(),
    );
  });
});

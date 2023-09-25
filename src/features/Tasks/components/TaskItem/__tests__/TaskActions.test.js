import { render } from "../../../../../utils/tests/test-util";
import { screen, waitFor } from "@testing-library/react";
import { Globals } from "react-spring";
import userEvent from "@testing-library/user-event";
import TaskActions from "../TaskActions";

beforeAll(() => {
  Globals.assign({
    skipAnimation: true,
  });
});

test("TaskActions button click behavior (Start action)", async () => {
  render(<TaskActions taskId={0} />);

  const actionBtn = screen.getAllByRole("button");
  const firstActionBtn = actionBtn[0];
  const actionWrapper = screen.getByTestId("task-actions");

  expect(actionWrapper).toHaveClass("z-20");

  await userEvent.click(firstActionBtn);
  waitFor(() => expect(actionWrapper).toHaveClass("z-0"));
});

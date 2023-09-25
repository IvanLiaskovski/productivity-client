import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskActionBtn from "../TaskActionBtn";

const mockClickEvent = jest.fn();

test("Clicking TaskActionBtn calls provided onClick function", async () => {
  render(
    <TaskActionBtn onClick={mockClickEvent}>
      <a href="#">Should be visible</a>
    </TaskActionBtn>,
  );

  const actionBtn = screen.getByRole("button");
  const actionBtnChild = screen.queryByRole("link");

  expect(actionBtn).toBeInTheDocument();
  expect(actionBtnChild).toBeInTheDocument();

  await userEvent.click(actionBtn);
  expect(mockClickEvent).toBeCalled();
});

test("TaskActionBtn hide children", () => {
  render(
    <TaskActionBtn isActionStart>
      <a href="#">Should be visible</a>
    </TaskActionBtn>,
  );

  const actionBtnChild = screen.queryByRole("link");
  expect(actionBtnChild).not.toBeInTheDocument();
});

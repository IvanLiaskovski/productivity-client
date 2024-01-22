import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import {
  PRIORITY_ARR,
  PRIORITY_COLORS,
} from "../../../../../data/priorityData";
import userEvent from "@testing-library/user-event";
import TaskActive from "../TaskActive";

const testName = "Test react task";
const urgentPriority = PRIORITY_ARR[0];
const mockClickEvent = jest.fn();

test("TaskActive render, set proper name and priority", () => {
  render(<TaskActive taskiId={0} name={testName} priority={urgentPriority} />);

  const taskContent = screen.getByText(testName);
  const priorityMark = screen.getByTestId("priority-mark");

  expect(taskContent).toBeInTheDocument();
  expect(priorityMark).toBeInTheDocument();
  expect(priorityMark).toHaveClass(PRIORITY_COLORS.bg[urgentPriority]);
});

test("TaskActive open task edit", async () => {
  render(
    <TaskActive
      taskiId={0}
      name={testName}
      priority={urgentPriority}
      setOpen={mockClickEvent}
    />,
  );

  const taskContent = screen.getByText(testName);
  await userEvent.click(taskContent);

  expect(mockClickEvent).toBeCalled();
});

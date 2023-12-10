import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import TaskCompleted from "../TaskCompleted";

const testName = "Test react task";

test("Complete task render and show correct name", () => {
  render(<TaskCompleted name={testName} priority="urgent" />);

  const taskContent = screen.getByText(testName);
  const priorityMark = screen.getByTestId("priority-mark");

  expect(taskContent).toBeInTheDocument();
  expect(priorityMark).not.toHaveClass("animate-ping");
});

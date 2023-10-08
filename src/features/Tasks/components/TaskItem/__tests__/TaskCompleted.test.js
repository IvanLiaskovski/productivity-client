import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import TaskCompleted from "../TaskCompleted";

const testContent = "Test react task";

test("Complete task render and show correct content", () => {
  render(<TaskCompleted content={testContent} priority="urgent" />);

  const taskContent = screen.getByText(testContent);
  const priorityMark = screen.getByTestId("priority-mark");

  expect(taskContent).toBeInTheDocument();
  expect(priorityMark).not.toHaveClass("animate-ping");
});

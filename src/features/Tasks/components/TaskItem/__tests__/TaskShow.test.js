import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import { PRIORITY_ARR } from "../../../../../data/priorityData";
import TaskShow from "../TaskShow";

const testContent = "Test react task";
const urgentPriority = PRIORITY_ARR[0];

test("Show task active view", () => {
  render(<TaskShow id={0} content={testContent} priority={urgentPriority} />);

  const priorityMark = screen.getByTestId("priority-mark");
  expect(priorityMark).toHaveClass("animate-ping");
});

test("Show task complete view", () => {
  render(
    <TaskShow
      id={0}
      content={testContent}
      priority={urgentPriority}
      isCompleted
    />,
  );

  const priorityMark = screen.getByTestId("priority-mark");
  expect(priorityMark).not.toHaveClass("animate-ping");
});

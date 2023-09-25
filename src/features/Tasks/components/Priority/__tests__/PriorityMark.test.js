import { screen, render } from "@testing-library/react";
import { PRIORITY_ARR } from "../../../../../data/priorityData";
import { PRIORITY_COLORS } from "../../../../../data/priorityData";
import PriorityMark from "../PriorityMark";

const commonPriority = PRIORITY_ARR[3];
const commonBackgroundColor = PRIORITY_COLORS.bg[commonPriority];

test("Verify PriorityMark class dependencies", () => {
  render(
    <PriorityMark className="mt-2" priority={commonPriority} isCompleted />,
  );

  const priorityMark = screen.getByTestId("priority-mark");
  expect(priorityMark).toBeInTheDocument();
  expect(priorityMark).toHaveClass("mt-2", commonBackgroundColor);
  expect(priorityMark).not.toHaveClass("animate-ping");
});

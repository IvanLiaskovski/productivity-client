import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PRIORITY_ARR } from "../../../../../data/priorityData";
import { PRIORITY_COLORS } from "../../../../../data/priorityData";
import PriorityPanel from "../PriorityPanel";

const mockEventClick = jest.fn();
const urgentPriority = PRIORITY_ARR[0];
const priorityBorderColor = PRIORITY_COLORS.border[urgentPriority];

test("PriorityPanel render priority buttons", async () => {
  render(
    <PriorityPanel
      priorityHandler={mockEventClick}
      activePriority={urgentPriority}
    />,
  );

  const priorityButtons = screen.getAllByRole("button");
  expect(priorityButtons[0]).toHaveClass(priorityBorderColor);

  for (const button of priorityButtons) {
    await userEvent.click(button);
  }

  expect(mockEventClick).toBeCalledTimes(PRIORITY_ARR.length);
});

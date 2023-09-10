import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PRIORITY_ARR } from "../../../../../data/priorityData";
import { PRIORITY_COLORS } from "../../../../../data/priorityData";
import PriorityBtn from "../PriorityBtn";

const mockEventClick = jest.fn();
const urgentPriority = PRIORITY_ARR[0];
const priorityIconColor = PRIORITY_COLORS.txt[urgentPriority];
const priorityBorderColor = PRIORITY_COLORS.border[urgentPriority];

test("PriorityBtn calls setPriority with correct argument", async () => {
  render(
    <PriorityBtn priority={urgentPriority} setPriority={mockEventClick}>
      Flag icon
    </PriorityBtn>,
  );

  const priorityBtn = screen.getByRole("button", { name: "Flag icon" });
  expect(priorityBtn).toBeInTheDocument();

  await userEvent.click(priorityBtn);
  expect(mockEventClick).toBeCalled();
  expect(mockEventClick).toHaveBeenCalledWith(urgentPriority);
});

test("PriorityBtn styling based on provided props", () => {
  render(
    <PriorityBtn
      priority={urgentPriority}
      className="mt-2"
      backgroundColor="dark"
      setPriority={mockEventClick}
      isActive
    />,
  );

  const priorityBtn = screen.getByRole("button");
  expect(priorityBtn).toHaveClass(
    "mt-2",
    "bg-block bg-opacity-90",
    priorityIconColor,
    priorityBorderColor,
  );
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MoveMonthBtn from "../MoveMonthBtn";

const mockClick = jest.fn();

describe("MoveMonthBtn tests", () => {
  test("Should render children and call click event", async () => {
    render(<MoveMonthBtn onClick={mockClick}>Add</MoveMonthBtn>);

    const button = screen.getByText("Add");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(mockClick).toBeCalled();
  });

  test("Should add appropriate className", () => {
    render(
      <MoveMonthBtn onClick={mockClick} className="mt-2">
        Add
      </MoveMonthBtn>,
    );

    const button = screen.getByText("Add");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("mt-2");
  });
});

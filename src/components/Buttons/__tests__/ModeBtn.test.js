import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModeBtn from "../ModeBtn";

const clickEventMock = jest.mock();

test("ModeBtn render and click", () => {
  const user = userEvent.setup();
  render(
    <ModeBtn className="mt-2" onClick={() => clickEventMock}>
      Change mode
    </ModeBtn>,
  );

  const modeBtnElement = screen.getByRole("button", { name: "Change mode" });

  expect(modeBtnElement).toBeInTheDocument();
  expect(modeBtnElement).toHaveClass("mt-2");
  expect(modeBtnElement).toHaveClass("bg-primary-200 text-primary-900");

  user.click(modeBtnElement);
  expect(clickEventMock.mock.call).toHaveLength(1);
});

test("ModeBtn active", () => {
  render(<ModeBtn isActive>Change mode</ModeBtn>);

  const modeBtnElement = screen.getByRole("button", { name: "Change mode" });
  expect(modeBtnElement).toBeInTheDocument();
  expect(modeBtnElement).toHaveClass("text-blue-100 bg-blue-500");
});

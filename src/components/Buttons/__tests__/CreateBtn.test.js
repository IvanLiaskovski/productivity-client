import userEvent from "@testing-library/user-event";
import CreateBtn from "../CreateBtn";
import { render, screen } from "@testing-library/react";

const clickEventMock = jest.mock();

test("CreateBtn render and click", () => {
  const user = userEvent.setup();
  render(
    <CreateBtn className="mt-2" onClick={() => clickEventMock}>
      Click me
    </CreateBtn>,
  );

  const btnElement = screen.getByRole("button", { name: "Click me" });
  expect(btnElement).toBeInTheDocument();
  expect(btnElement).toHaveClass("mt-2");

  user.click(btnElement);
  expect(clickEventMock.mock.call).toHaveLength(1);
});

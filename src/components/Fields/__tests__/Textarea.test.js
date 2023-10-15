import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "../Textarea";

const changeEventMock = jest.fn();

test("Textarea type text and forward refration tests", async () => {
  const user = userEvent.setup();
  const textareaRef = createRef("textarea");

  render(
    <Textarea
      ref={textareaRef}
      placeholder="Type email"
      onChange={changeEventMock}
    />,
  );

  const textarea = screen.getByPlaceholderText("Type email");
  expect(textarea).toBeInTheDocument();

  await user.type(textarea, "Lorem ipsum");

  expect(textareaRef.current.value).toBe("Lorem ipsum");
  expect(changeEventMock).toBeCalled();

  user.tab();
  user.click(textarea);

  expect(textarea.selectionStart).toBe(textarea.value.length);
  expect(textarea.selectionEnd).toBe(textarea.value.length);
});

test("Textarea style props dependence props test", () => {
  render(
    <Textarea
      isTransparent
      mode="light"
      className="mt-2"
      onChange={changeEventMock}
    />,
  );

  const textarea = screen.getByRole("textbox");

  expect(textarea).toBeInTheDocument();
  expect(textarea).toHaveClass("bg-transparent", "text-primary-900", "mt-2");
});

import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskManagementPanel from "../TaskManagementPanel";

const testContent = "Test task";
const mockTypeTextEvent = jest.fn();
const mockSaveEvent = jest.fn();

test("Type and save content", async () => {
  render(
    <TaskManagementPanel
      content={testContent}
      setContent={mockTypeTextEvent}
      onSave={mockSaveEvent}
    />,
  );

  const contentField = screen.getByRole("textbox");
  const saveBtn = screen.getByTitle("Save");

  expect(contentField).toBeInTheDocument();
  expect(saveBtn).toBeInTheDocument();
  expect(contentField.value).toBe(testContent);

  await userEvent.click(saveBtn);
  expect(mockSaveEvent).toBeCalled();
});

test("Text color", async () => {
  render(<TaskManagementPanel content={testContent} textColor="light" />);

  const contentField = screen.getByRole("textbox");
  expect(contentField).toHaveClass("text-blue-100");
});

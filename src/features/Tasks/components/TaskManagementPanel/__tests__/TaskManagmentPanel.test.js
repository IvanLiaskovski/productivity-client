import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskManagementPanel from "../TaskManagementPanel";

const testContent = "Test task";
const testDescription = "Test description";
const mockTypeTextEvent = jest.fn();
const mockSaveEvent = jest.fn();

test("Type and save content", async () => {
  render(
    <TaskManagementPanel
      content={testContent}
      description={testDescription}
      setContent={mockTypeTextEvent}
      onSave={mockSaveEvent}
    />,
  );

  const contentField = screen.getByRole("textbox", { name: /name:/i });
  const descriptionField = screen.getByRole("textbox", {
    name: /description:/i,
  });
  const saveBtn = screen.getByTitle("Save");

  expect(contentField).toBeInTheDocument();
  expect(saveBtn).toBeInTheDocument();
  expect(contentField.value).toBe(testContent);
  expect(descriptionField.value).toBe(testDescription);

  await userEvent.click(saveBtn);
  expect(mockSaveEvent).toBeCalled();
});

test("Text color", async () => {
  render(<TaskManagementPanel content={testContent} textColor="mode" />);

  const contentField = screen.getByRole("textbox", { name: /name:/i });
  expect(contentField).toHaveClass("text-blue-100");
});

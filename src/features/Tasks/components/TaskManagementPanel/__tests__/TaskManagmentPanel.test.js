import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskManagementPanel from "../TaskManagementPanel";

const testName = "Test task";
const testNotes = "Test notes";
const mockTypeTextEvent = jest.fn();
const mockSaveEvent = jest.fn();

test("Type and save name", async () => {
  render(
    <TaskManagementPanel
      name={testName}
      notes={testNotes}
      setname={mockTypeTextEvent}
      onSave={mockSaveEvent}
    />,
  );

  const nameField = screen.getByRole("textbox", { name: /name:/i });
  const notesField = screen.getByRole("textbox", {
    name: /notes:/i,
  });
  const saveBtn = screen.getByTitle("Save");

  expect(nameField).toBeInTheDocument();
  expect(saveBtn).toBeInTheDocument();
  expect(nameField.value).toBe(testName);
  expect(notesField.value).toBe(testNotes);

  await userEvent.click(saveBtn);
  expect(mockSaveEvent).toBeCalled();
});

test("Text color", async () => {
  render(<TaskManagementPanel name={testName} textColor="mode" />);

  const nameField = screen.getByRole("textbox", { name: /name:/i });
  expect(nameField).toHaveClass("text-blue-100");
});

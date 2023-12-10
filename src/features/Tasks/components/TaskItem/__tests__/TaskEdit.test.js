import { render } from "../../../../../utils/tests/test-util";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../../../../app/store";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import { PRIORITY_ARR } from "../../../../../data/priorityData";
import TaskEdit from "../TaskEdit";

let testTaskId;
const taskName = "TestTaskUniqueId";
const typeName = " Test type";
const urgentPriotity = PRIORITY_ARR[0];
const clickEventMock = jest.fn();

beforeAll(() => {
  testTaskId = createTestTask(taskName);
});

afterAll(() => removeTestTask(testTaskId));

test("Update task name", async () => {
  render(
    <TaskEdit
      taskId={testTaskId}
      name={taskName}
      priority={urgentPriotity}
      setOpen={clickEventMock}
    />,
  );

  const nameField = screen.getByRole("textbox", { name: /name:/i });
  const saveBtn = screen.getByTitle("Save");

  expect(nameField).toBeInTheDocument();
  expect(saveBtn).toBeInTheDocument();
  expect(nameField.value).toBe(taskName);

  await userEvent.type(nameField, typeName);
  expect(nameField.value).toBe(taskName + typeName);

  await userEvent.click(saveBtn);
  expect(clickEventMock).toBeCalled();

  waitFor(() =>
    expect(store.getState().tasks.entities[testTaskId].name).toBe(
      taskName + typeName,
    ),
  );
});

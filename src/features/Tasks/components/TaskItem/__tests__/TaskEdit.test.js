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
const taskContent = "TestTaskUniqueId";
const typeContent = " Test type";
const urgentPriotity = PRIORITY_ARR[0];
const clickEventMock = jest.fn();

beforeAll(() => {
  testTaskId = createTestTask(taskContent);
});

afterAll(() => removeTestTask(testTaskId));

test("Update task content", async () => {
  render(
    <TaskEdit
      taskId={testTaskId}
      content={taskContent}
      priority={urgentPriotity}
      setOpen={clickEventMock}
    />,
  );

  const contentField = screen.getByRole("textbox", { name: /name:/i });
  const saveBtn = screen.getByTitle("Save");

  expect(contentField).toBeInTheDocument();
  expect(saveBtn).toBeInTheDocument();
  expect(contentField.value).toBe(taskContent);

  await userEvent.type(contentField, typeContent);
  expect(contentField.value).toBe(taskContent + typeContent);

  await userEvent.click(saveBtn);
  expect(clickEventMock).toBeCalled();
  waitFor(() =>
    expect(store.getState().tasks.entities[testTaskId].content).toBe(
      taskContent + typeContent,
    ),
  );
});

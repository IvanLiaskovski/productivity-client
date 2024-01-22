import { render, screen } from "../../../../../utils/tests/test-util";
import userEvent from "@testing-library/user-event";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import store from "../../../../../app/store";
import { updateTask } from "../../../tasksSlice";
import TaskUnDo from "../TaskUnDo";

let testTaskId;
const name = "Test task name";

beforeAll(() => {
  testTaskId = createTestTask(name);
  store.dispatch(
    updateTask({
      id: testTaskId,
      isCompleted: true,
    }),
  );
});

afterAll(() => removeTestTask(testTaskId));

test("Undo task", async () => {
  render(<TaskUnDo taskId={testTaskId} />);
  const unDoBtn = screen.getByRole("button");

  expect(unDoBtn).toBeInTheDocument();
  expect(store.getState().tasks.entities[testTaskId].isCompleted).toBeTruthy();

  await userEvent.click(unDoBtn);
  expect(store.getState().tasks.entities[testTaskId].isCompleted).toBeFalsy();
});

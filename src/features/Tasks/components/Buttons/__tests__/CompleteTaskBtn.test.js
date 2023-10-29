import { render } from "../../../../../utils/tests/test-util";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Globals } from "@react-spring/web";
import store from "../../../../../app/store";
import { selectTaskById } from "../../../tasksSlice";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import CompleteTaskBtn from "../CompleteTaskBtn";

let testTaskId;
const mockStartAction = jest.fn();

beforeAll(() => {
  Globals.assign({
    skipAnimation: true,
  });
});

beforeEach(() => {
  testTaskId = createTestTask("TestTaskUniqueId");
});

afterEach(() => {
  removeTestTask(testTaskId);
});

test("Clicking complete button marks task as completed", async () => {
  render(<CompleteTaskBtn taskId={testTaskId} />);

  const completeBtn = screen.getByRole("button");
  expect(completeBtn).toBeInTheDocument();

  const task = selectTaskById(store.getState(), testTaskId);
  expect(task.completed).toBeFalsy();

  await userEvent.click(completeBtn);

  waitFor(() => {
    const completedTask = selectTaskById(store.getState(), testTaskId);
    expect(completedTask.completed).toBeTruthy();
  }, 1000);
});

test("Verify styling changes and startAction call on complete button click", async () => {
  render(<CompleteTaskBtn startAction={mockStartAction} taskId={testTaskId} />);

  const completeBtn = screen.getByRole("button");
  const wrapper = screen.getByTestId("animation-wrapper");
  expect(wrapper).toHaveStyle("transform: scale(1)");

  await userEvent.click(completeBtn);

  waitFor(() => {
    expect(mockStartAction).toBeCalled();
    expect(wrapper).toHaveStyle("transform: scale(99)");
  });
});

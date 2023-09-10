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
import DeleteTaskBtn from "../DeleteTaskBtn";

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

test("Clicking delete button marks task as deleted", async () => {
  render(<DeleteTaskBtn taskId={testTaskId} />);

  const deleteBtn = screen.getByRole("button");
  expect(deleteBtn).toBeInTheDocument();

  const task = selectTaskById(store.getState(), testTaskId);
  expect(task).toBeTruthy();

  await userEvent.click(deleteBtn);
  waitFor(() => {
    const deletedTask = selectTaskById(store.getState(), testTaskId);
    expect(deletedTask.completed).toBeFalsy();
  }, 1000);
});

test("Verify styling changes and startAction call on delete button click", async () => {
  render(<DeleteTaskBtn startAction={mockStartAction} taskId={testTaskId} />);

  const deleteBtn = screen.getByRole("button");
  const wrapper = screen.getByTestId("animation-wrapper");
  expect(wrapper).toHaveStyle("transform: scale(1)");

  await userEvent.click(deleteBtn);

  expect(mockStartAction).toBeCalled();
  waitFor(() => expect(wrapper).toHaveStyle("transform: scale(99)"));
});

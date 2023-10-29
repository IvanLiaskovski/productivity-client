import { renderHook, waitFor, act } from "@testing-library/react";
import { storeWrapper as wrapper } from "../../../../utils/tests/test-util";
import {
  createTestTask,
  removeTestTask,
} from "../../../../utils/tests/storeTestTasks";
import store from "../../../../app/store";
import { updateTask } from "../../tasksSlice";
import { useUnDoTask } from "../useUnDoTask";

let testTaskId;
const content = "Test task content";

beforeAll(() => {
  testTaskId = createTestTask(content);
  store.dispatch(
    updateTask({
      id: testTaskId,
      isCompleted: true,
    }),
  );
});

afterAll(() => removeTestTask(testTaskId));

test("Undo task", () => {
  const { result } = renderHook(() => useUnDoTask(testTaskId), { wrapper });
  const unDoTask = result.current;

  expect(store.getState().tasks.entities[testTaskId].isCompleted).toBeTruthy();
  act(() => unDoTask());
  waitFor(() =>
    expect(store.getState().tasks.entities[testTaskId].isCompleted).toBeFalsy(),
  );
});

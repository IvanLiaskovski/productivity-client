import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import { TasksDateRangeProvider } from "../../../context/TasksDateRangeContext";
import TasksDayList from "../TasksDayList";

const testTaskContents = ["Test", "Test1", "Test2"];
const testTaskIds = [];

beforeAll(() => {
  testTaskContents.forEach((content) =>
    testTaskIds.push(createTestTask(content)),
  );
});

afterAll(() => {
  testTaskIds.forEach((id) => removeTestTask(id));
});

test("TasksDayList render tasks list", () => {
  render(
    <TasksDateRangeProvider>
      <TasksDayList />
    </TasksDateRangeProvider>,
  );

  testTaskContents.forEach((content) => {
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});

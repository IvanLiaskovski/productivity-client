import { render } from "../../../../../utils/tests/test-util";
import { screen, waitFor } from "@testing-library/react";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import { TasksDateProvider } from "../../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../../context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";
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
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider>
          <TasksDayList />
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>,
  );

  waitFor(() => {
    testTaskContents.forEach((content) => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });
});

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

const testTasknames = ["Test", "Test1", "Test2"];
const testTaskIds = [];

beforeAll(() => {
  testTasknames.forEach((name) => testTaskIds.push(createTestTask(name)));
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
    testTasknames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});

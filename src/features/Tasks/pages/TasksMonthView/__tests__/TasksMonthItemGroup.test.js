import moment from "moment";
import {
  render,
  screen,
  createFakeTask,
  waitFor,
} from "../../../../../utils/tests/test-util";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import TasksMonthItemsGroup from "../TasksMonthItemsGroup";

const currentDate = moment();

const tasksIds = [];
const tasks = createFakeTask("day", currentDate);

beforeEach(() => {
  tasks.forEach(({ content, date, type }) => {
    tasksIds.push(createTestTask(content, date, type));
  });
});

afterEach(() => {
  tasksIds.forEach((taskId) => {
    removeTestTask(taskId);
  });
});

describe("TasksMonthItemGroup tests", () => {
  test("Should display all tasks for current month", () => {
    render(<TasksMonthItemsGroup />);
    waitFor(() => {
      tasks.forEach(({ content }) => {
        const task = screen.getByText(content);
        expect(task).toBeInTheDocument();
      });
    });
  });
});

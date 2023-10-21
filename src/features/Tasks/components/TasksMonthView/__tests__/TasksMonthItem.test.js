import moment from "moment";
import {
  render,
  screen,
  createFakeTask,
} from "../../../../../utils/tests/test-util";
import {
  createTestTask,
  removeTestTask,
} from "../../../../../utils/tests/storeTestTasks";
import TasksMonthItem from "../TasksMonthItem";

const currentDate = moment();
const formatedDate = currentDate.clone().format("YYYY-MM-DD");
const monthDay = currentDate.clone().date();

const tasks = createFakeTask("day", formatedDate);
const tasksIds = [];

beforeEach(() => {
  tasks.forEach(({ content, date }) => {
    tasksIds.push(createTestTask(content, date));
  });
});

afterEach(() => {
  tasksIds.forEach((taskId) => {
    removeTestTask(taskId);
  });
});

describe("TasksMonthItem tests", () => {
  test("Should display the corresponding month and day and render the tasks list", () => {
    render(<TasksMonthItem date={formatedDate} day={monthDay} />);

    const monthDayElement = screen.getByText(`${monthDay}.`);
    expect(monthDayElement).toBeInTheDocument();

    tasks.forEach(({ content }) => {
      const task = screen.getByText(content);
      expect(task).toBeInTheDocument();
    });
  });

  test("Should add appropriate className", () => {
    render(
      <TasksMonthItem date={formatedDate} day={monthDay} className="mt-2" />,
    );

    const monthItemWrapper = screen.getByTestId("month-item-wrapper");
    expect(monthItemWrapper).toHaveClass("mt-2");
  });
});

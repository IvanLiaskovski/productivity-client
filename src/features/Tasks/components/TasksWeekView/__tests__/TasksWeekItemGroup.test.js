import { render, screen, waitFor } from "../../../../../utils/tests/test-util";
import moment from "moment";
import store from "../../../../../app/store";
import { createTask, removeTask } from "../../../tasksSlice";
import { createFakeTask } from "../../../../../utils/tests/test-util";
import TasksWeekItemGroup from "../TasksWeekItemGroup";

const currentDate = moment();

const mondayDate = currentDate.startOf("isoWeek").format("YYYY-MM-DD");
const thursdayDate = currentDate
  .startOf("isoWeek")
  .add(1, "day")
  .format("YYYY-MM-DD");

const mondayTasks = createFakeTask("day", mondayDate);
const thursdayTasks = createFakeTask("day", thursdayDate);

beforeAll(() => {
  [...mondayTasks, ...thursdayTasks].forEach((task) =>
    store.dispatch(createTask(task)),
  );
});

afterAll(() => {
  [...mondayTasks, ...thursdayTasks].forEach(({ id }) =>
    store.dispatch(removeTask(id)),
  );
});

const mockTasksRangeDateContext = {
  date: moment().format("YYYY-MM-DD"),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Should add all monday and thursday tasks", () => {
  render(
    <TasksWeekItemGroup
      datesRange={currentDate
        .startOf("isoWeek")
        .add(1, "week")
        .format("YYYY-MM-DD")}
    />,
  );

  waitFor(() => {
    [...mondayTasks, ...thursdayTasks].forEach(({ content }) => {
      const task = screen.getByText(content);

      expect(task).toBeInTheDocument();
    });
  });
});

import { render, screen, waitFor } from "../../../../../utils/tests/test-util";
import moment from "moment";
import store from "../../../../../app/store";
import { createTask, removeTask } from "../../../tasksSlice";
import { createFakeTask } from "../../../../../utils/tests/test-util";
import TasksWeekItem from "../TasksWeekItem";

const tasksData = createFakeTask("day", moment().format("YYYY-MM-DD"));

beforeAll(() => {
  tasksData.forEach((task) => store.dispatch(createTask(task)));
});

afterAll(() => {
  tasksData.forEach(({ id }) => store.dispatch(removeTask(id)));
});

test("Shoud add three tasks", () => {
  render(<TasksWeekItem tasksDate={moment().format("YYYY-MM-DD")} />);

  waitFor(() => {
    tasksData.forEach(({ content }) => {
      const taskTitle = screen.getByText(content);
      expect(taskTitle).toBeInTheDocument();
    });
  });
});

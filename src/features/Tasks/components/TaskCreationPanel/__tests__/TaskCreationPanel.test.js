import { render, screen, waitFor } from "../../../../../utils/tests/test-util";
import userEvent from "@testing-library/user-event";
import TaskCreationPanel from "../TaskCreationPanel";
import OpenCreatePanelProvider from "../../../../../context/OpenCreatePanelContext";
import { TasksDateProvider } from "../../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../../context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";
import store from "../../../../../app/store";
import { removeTask } from "../../../tasksSlice";

const taskTestContent = "Unique Test - create task";

afterAll(() => {
  setTimeout(() => {
    const task = getTaskByContent(taskTestContent);
    store.dispatch(removeTask(task[0]));
  });
});

test("Create a task with a specific priority", async () => {
  render(
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider>
          <OpenCreatePanelProvider open={true}>
            <TaskCreationPanel />
          </OpenCreatePanelProvider>
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>,
  );

  const contentField = screen.getByRole("textbox", { name: /name:/i });
  const priorityBtn = screen.getByTitle("urgent");
  const saveBtn = screen.getByTitle("Save");

  await userEvent.type(contentField, taskTestContent);
  await userEvent.click(priorityBtn);
  await userEvent.click(saveBtn);
  waitFor(() => {
    const task = getTaskByContent(taskTestContent);

    expect(task[1].priority).toBe("urgent");
  });
});

test("Create empty task warning", async () => {
  render(
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider>
          <OpenCreatePanelProvider open={true}>
            <TaskCreationPanel />
          </OpenCreatePanelProvider>
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>,
  );

  const saveBtn = screen.getByTitle("Save");
  const wrapper = screen.getByTestId("create-task-wrapper");
  await userEvent.click(saveBtn);

  expect(wrapper).toHaveClass("shadow-red-600");
});

function getTaskByContent(content) {
  return Object.entries(store.getState().tasks.entities).find(
    (task) => task[1].content === content,
  );
}

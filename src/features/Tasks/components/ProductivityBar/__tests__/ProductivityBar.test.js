import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import store from "../../../../../app/store";
import { updateTask } from "../../../tasksSlice";
import { Globals } from "react-spring";
import { TasksDateRangeProvider } from "../../../context/TasksDateRangeContext";
import ProductivityBar from "../ProductivityBar";

beforeAll(() => {
  Globals.assign({
    skipAnimation: true,
  });

  store.dispatch(
    updateTask({
      id: 1,
      isCompleted: true,
    }),
  );
});

test("ProductivityBar width depends on completed tasks.", async () => {
  render(
    <TasksDateRangeProvider>
      <ProductivityBar />
    </TasksDateRangeProvider>,
  );

  const percentageInfo = screen.getByTestId("productivity-line");

  expect(percentageInfo).toBeInTheDocument();
  expect(percentageInfo).toHaveStyle("width: 66.66666666666667%");
});

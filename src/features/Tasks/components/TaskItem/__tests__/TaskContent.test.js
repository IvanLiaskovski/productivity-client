import { screen, render } from "@testing-library/react";
import { Globals } from "react-spring";
import TaskContent from "../TaskContent";

const testName = "Test react task";

beforeAll(() => {
  Globals.assign({
    skipAnimation: true,
  });
});

test("TaskContent name appearance", () => {
  render(<TaskContent name={testName} />);

  const TaskContentElement = screen.getByText(testName);
  expect(TaskContentElement).toBeInTheDocument();
});

import { screen, render } from "@testing-library/react";
import { Globals } from "react-spring";
import TaskContent from "../TaskContent";

const testContent = "Test react task";

beforeAll(() => {
  Globals.assign({
    skipAnimation: true,
  });
});

test("TaskContent content appearance", () => {
  render(<TaskContent content={testContent} />);

  const TaskContentElement = screen.getByText(testContent);
  expect(TaskContentElement).toBeInTheDocument();
});

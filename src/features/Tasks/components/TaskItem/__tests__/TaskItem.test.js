import { render } from "../../../../../utils/tests/test-util";
import { screen, waitFor } from "@testing-library/react";
import TaskItem from "../TaskItem";

test("Open edit task view", () => {
  render(<TaskItem taskId={0} isOpen />);

  const saveTaskBtn = screen.getByTitle("Save");
  expect(saveTaskBtn).toBeInTheDocument();
});

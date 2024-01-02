import { render } from "../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import ActiveTasksSwitch from "../ActiveTasksSwitch";
import userEvent from "@testing-library/user-event";
import store from "../../../../../app/store";

test("Clicking ActiveTasksSwitch updates onlyActive state", async () => {
  render(<ActiveTasksSwitch />);
  expect(store.getState().tasks.onlyActive).toBeFalsy();

  const switchBtn = screen.getByRole("button");
  expect(switchBtn).toBeInTheDocument();

  await userEvent.click(switchBtn);
  expect(store.getState().tasks.onlyActive).toBeTruthy();
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TasksNavItem from "../TasksNavItem";

test("TaskNavItem active and extended classes tests", async () => {
  const wrapper = ({ children }) => (
    <MemoryRouter>
      <Routes>
        <Route path="task/*" element={<div></div>}>
          <Route path="task/day"></Route>
        </Route>
      </Routes>
      {children}
    </MemoryRouter>
  );

  render(
    <TasksNavItem url="/task" title="task" className="mt-2">
      Day
    </TasksNavItem>,
    { wrapper },
  );

  const navItem = screen.getByRole("link", { name: "Day" });
  expect(navItem).toBeInTheDocument();
  expect(navItem).not.toHaveClass(
    "shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]",
    "mt-2",
  );

  await userEvent.click(navItem);
  expect(navItem).toHaveClass(
    "shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]",
  );
});

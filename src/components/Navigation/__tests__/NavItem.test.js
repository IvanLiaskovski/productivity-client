import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NavItem from "../NavItem";

test("NavItem active and extended classes tests", async () => {
  const wrapper = ({ children }) => (
    <MemoryRouter>
      <Routes>
        <Route path="/task" element={<div>Task</div>} />
      </Routes>
      {children}
    </MemoryRouter>
  );

  render(
    <NavItem url="/task" title="task" className="mt-2">
      Task
    </NavItem>,
    { wrapper },
  );

  const navItem = screen.getByRole("link", { name: "Task" });
  expect(navItem).toBeInTheDocument();
  expect(navItem).toHaveClass("border-transparent", "mt-2");

  await userEvent.click(navItem);
  expect(navItem).toHaveClass("border-white");
});

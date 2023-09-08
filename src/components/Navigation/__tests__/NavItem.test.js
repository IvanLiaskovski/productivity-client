import { render, screen } from "@testing-library/react";
import NavItem from "../NavItem";

test("NavItem active and extended classes tests", () => {
  render(
    <NavItem isActive className="mt-2">
      Dashboard
    </NavItem>,
  );

  const navItem = screen.getByRole("link", { name: "Dashboard" });
  expect(navItem).toBeInTheDocument();
  expect(navItem).toHaveClass("border-white", "mt-2");
});

import { render, screen } from "@testing-library/react";
import TasksWeeksPanel from "../TasksWeeksPanel";
import { weekDays } from "../../../../../data/weekDays";

describe("TasksWeeksPanel tests", () => {
  test("Should display all week days", () => {
    render(<TasksWeeksPanel />);

    weekDays.forEach((weekName) => {
      const weekItem = screen.getByText(weekName);
      expect(weekItem).toBeInTheDocument();
    });
  });
});

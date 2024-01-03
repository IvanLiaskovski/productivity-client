import { render } from "../../../../../../utils/tests/test-util";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDateProvider } from "../../../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../../../context/TasksDatesRangeContext";
import { MemoryRouter } from "react-router";
import SlideDayItem from "../SlideDayItem";

const mockChangeDate = jest.fn();

jest.mock("../../../../context/TasksDateContext", () => ({
  ...jest.requireActual("../../../../context/TasksDateContext"),
  useTasksDateContext: () => ({ date: "2023-08-22", setDate: mockChangeDate }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test("Change view date", async () => {
  render(
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider>
          <SlideDayItem day={"23"} weekName="Wednesday" itemDate="2023-08-23" />
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>,
  );

  const day = screen.getByText("23");
  const week = screen.getByText("Wed.");

  expect(day).toBeInTheDocument();
  expect(week).toBeInTheDocument();

  await userEvent.click(day);

  expect(mockChangeDate).toBeCalled();
  expect(mockChangeDate).toHaveBeenCalledWith("2023-08-23");
});

test("Skip change view date if swipe", async () => {
  render(
    <MemoryRouter>
      <TasksDatesRangeProvider>
        <TasksDateProvider>
          <SlideDayItem
            day={"23"}
            weekName="Sunday"
            isSwipe
            itemDate="Wednesday"
          />
        </TasksDateProvider>
      </TasksDatesRangeProvider>
    </MemoryRouter>,
  );

  const day = screen.getByText("23");
  await userEvent.click(day);

  expect(mockChangeDate).not.toBeCalled();
});

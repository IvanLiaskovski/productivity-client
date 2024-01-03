import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { TasksDateProvider } from "../../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../../context/TasksDatesRangeContext";
import useMoveDate from "../../../hooks/useMoveDate";
import MoveTasksDateBtn from "../MoveTasksDateBtn";

const mockMoveDate = jest.fn();

jest.mock("../../../hooks/useMoveDate", () => jest.fn(() => mockMoveDate));

describe("MoveTasksDateBtn button tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should call moveDate with proper arguments", async () => {
    render(
      <MemoryRouter>
        <TasksDatesRangeProvider>
          <TasksDateProvider>
            <MoveTasksDateBtn moveBy={1} moveByUnit="months" />
          </TasksDateProvider>
        </TasksDatesRangeProvider>
      </MemoryRouter>,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(useMoveDate).toBeCalled();
    expect(mockMoveDate).toBeCalledWith(1, true, "months");
  });
});

import { renderHook, act } from "@testing-library/react";
import useMoveDate from "../useMoveDate";
import { MemoryRouter } from "react-router";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";
import moment from "moment";

const mockSetDate = jest.fn();
const mockDate = moment().format("YYYY-MM-DD");

jest.mock("../../context/TasksDateContext", () => ({
  ...jest.requireActual("../../context/TasksDateContext"),
  useTasksDateContext: jest.fn(() => ({
    date: mockDate,
    setDate: mockSetDate,
  })),
}));

afterEach(() => {});

describe("MoveBack button tests", () => {
  test("Should move date 1 month backward", async () => {
    const wrapper = ({ children }) => (
      <MemoryRouter>
        <TasksDatesRangeProvider>
          <TasksDateProvider>{children}</TasksDateProvider>
        </TasksDatesRangeProvider>
      </MemoryRouter>
    );

    const { result } = renderHook(() => useMoveDate(), { wrapper });
    const moveDate = result.current;

    act(() => moveDate(-1, true, "month"));

    expect(mockSetDate).toBeCalled();
    expect(mockSetDate).toBeCalledWith(
      moment(mockDate).add(-1, "month").format("YYYY-MM-DD"),
    );
  });
});

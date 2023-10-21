import { renderHook, act } from "@testing-library/react";
import useMoveDate from "../useMoveDate";
import { TasksDateProvider } from "../../context/TasksDateContext";
import moment from "moment";

const mockTasksDateContext = {
  date: moment().format("YYYY-MM-DD"),
  setDate: (date) => (mockTasksDateContext.date = date),
};

afterEach(() => {
  mockTasksDateContext.date = moment().format("YYYY-MM-DD");
});

describe("MoveBack button tests", () => {
  test("Should move date 1 month backward", async () => {
    const wrapper = ({ children }) => (
      <TasksDateProvider {...mockTasksDateContext}>
        {children}
      </TasksDateProvider>
    );

    const { result } = renderHook(() => useMoveDate(), { wrapper });
    const moveDate = result.current;

    expect(moment(mockTasksDateContext.date).month()).toBe(moment().month());

    act(() => moveDate(-1, true, "month"));

    expect(moment(mockTasksDateContext.date).month()).toBe(
      moment().add(-1, "month").month(),
    );
  });

  test("Should move date 1 week forward", async () => {
    const wrapper = ({ children }) => (
      <TasksDateProvider {...mockTasksDateContext}>
        {children}
      </TasksDateProvider>
    );

    const { result } = renderHook(() => useMoveDate(), { wrapper });
    const moveDate = result.current;

    expect(moment(mockTasksDateContext.date).month()).toBe(moment().month());

    act(() => moveDate(-1, true, "month"));

    expect(moment(mockTasksDateContext.date).month()).toBe(
      moment().add(-1, "month").month(),
    );
  });
});

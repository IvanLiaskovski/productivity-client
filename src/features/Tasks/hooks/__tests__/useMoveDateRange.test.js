import { renderHook } from "@testing-library/react";
import moment from "moment";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";
import useMoveDateRange from "../useMoveDateRange";

const mockDateRangeProps = {
  setDatesRange: jest.fn(
    (newDate) => (mockDateRangeProps.datesRange = newDate),
  ),
  datesRange: moment().format("YYYY-MM-DD"),
};

afterEach(() => {
  mockDateRangeProps.datesRange = moment().format("YYYY-MM-DD");
});

test("Move date forward", () => {
  const wrapper = ({ children }) => (
    <TasksDatesRangeProvider {...mockDateRangeProps}>
      {children}
    </TasksDatesRangeProvider>
  );

  const { result } = renderHook(() => useMoveDateRange(), { wrapper });
  const moveDate = result.current;

  moveDate(3, true);

  expect(mockDateRangeProps.datesRange).toBe(
    moment().add(3, "week").format("YYYY-MM-DD"),
  );
});

test("Move date back", () => {
  const wrapper = ({ children }) => (
    <TasksDatesRangeProvider {...mockDateRangeProps}>
      {children}
    </TasksDatesRangeProvider>
  );

  const { result } = renderHook(() => useMoveDateRange(), { wrapper });
  const moveDate = result.current;

  moveDate(-3, true);

  expect(mockDateRangeProps.datesRange).toBe(
    moment().add(-3, "week").format("YYYY-MM-DD"),
  );
});

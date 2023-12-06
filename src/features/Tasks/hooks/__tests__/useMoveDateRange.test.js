import { renderHook } from "@testing-library/react";
import useMoveDateRange from "../useMoveDateRange";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";

const mockUseMoveDateRange = jest.fn(() => false);

jest.mock("../useMoveDateRange", () => jest.fn(() => mockUseMoveDateRange));

test("Move date forward", () => {
  const wrapper = ({ children }) => (
    <TasksDatesRangeProvider>{children}</TasksDatesRangeProvider>
  );

  const { result } = renderHook(() => useMoveDateRange(), { wrapper });
  const moveDate = result.current;

  moveDate(3, true);

  expect(mockUseMoveDateRange).toBeCalledWith(3, true);
});

import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import useCheckTasksURL from "../useCheckTasksURL";

jest.mock("react-router", () => ({
  useParams: () => ({
    "*": "week",
  }),
}));

test("should return true when taskModule matches week", () => {
  const { result } = renderHook(() => useCheckTasksURL("week"), {
    wrapper: MemoryRouter,
    initialProps: { initialEntries: ["/task/week"] },
  });

  expect(result.current).toBe(true);
});

test("should return false when taskModule not matches day", () => {
  const { result } = renderHook(() => useCheckTasksURL("day"), {
    wrapper: MemoryRouter,
    initialProps: { initialEntries: ["/task/week"] },
  });

  expect(result.current).toBe(false);
});

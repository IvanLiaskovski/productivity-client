import { renderHook, act } from "@testing-library/react";
import { useToggle } from "../useToggle";

test("Toggle - open/close", () => {
  const { result } = renderHook(() => useToggle(false));
  const [, toggle] = result.current;

  act(() => toggle());
  expect(result.current[0]).toBeTruthy();

  act(() => toggle(false));
  expect(result.current[0]).toBeFalsy();
});

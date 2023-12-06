import { renderHook, act } from "@testing-library/react";
import OpenCreatePanelProvider from "../OpenCreatePanelContext";
import { useOpenCreatePanelContext } from "../OpenCreatePanelContext";

test("CreatePanelContext shoud open after click", () => {
  const wrapper = ({ children }) => (
    <OpenCreatePanelProvider>{children}</OpenCreatePanelProvider>
  );

  const { result } = renderHook(() => useOpenCreatePanelContext(), { wrapper });

  act(() => {
    result.current.setOpen(true);
  });

  expect(result.current.isOpen).toBeTruthy();
});

import { renderHook, act } from "@testing-library/react";
import OpenCreatePanelProvider from "../OpenCreatePanelContext";
import { useOpenCreatePanelContext } from "../OpenCreatePanelContext";

const mockOpenPanelContext = {
  isOpen: false,
  setOpen: jest.fn((isOpen) => (mockOpenPanelContext.isOpen = isOpen)),
};

test("CreatePanelContext shoud open after click", () => {
  const wrapper = ({ children }) => (
    <OpenCreatePanelProvider {...mockOpenPanelContext}>
      {children}
    </OpenCreatePanelProvider>
  );

  const { result } = renderHook(() => useOpenCreatePanelContext(), { wrapper });

  act(() => {
    result.current.setOpen(true);
  });

  expect(mockOpenPanelContext.setOpen).toBeCalled();
  expect(mockOpenPanelContext.isOpen).toBeTruthy();
});

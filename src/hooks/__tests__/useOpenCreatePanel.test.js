import { renderHook, act } from "@testing-library/react";
import OpenCreatePanelProvider from "../../context/OpenCreatePanelContext";
import useOpenCreatePanel from "../useOpenCreatePanel";

const mockCreatePanelProps = {
  isOpen: false,
  setOpen: jest.fn((val) => (mockCreatePanelProps.isOpen = val)),
};

test("Open panel - hook test", () => {
  const wrapper = ({ children }) => (
    <OpenCreatePanelProvider {...mockCreatePanelProps}>
      {children}
    </OpenCreatePanelProvider>
  );

  const { result } = renderHook(() => useOpenCreatePanel(), { wrapper });
  const [openPanel] = result.current;

  act(() => openPanel());

  expect(mockCreatePanelProps.setOpen).toBeCalled();
  expect(mockCreatePanelProps.isOpen).toBeTruthy();
});

import { renderHook, act } from "@testing-library/react";
import OpenCreatePanelProvider from "../../context/OpenCreatePanelContext";
import useOpenCreatePanel from "../useOpenCreatePanel";

const mockOpenPanelContext = jest.fn();
jest.mock("../useOpenCreatePanel", () => jest.fn(() => [mockOpenPanelContext]));

test("Open panel - hook test", () => {
  const wrapper = ({ children }) => (
    <OpenCreatePanelProvider>{children}</OpenCreatePanelProvider>
  );

  const { result } = renderHook(() => useOpenCreatePanel(), { wrapper });
  const [openPanel] = result.current;

  act(() => openPanel());

  expect(mockOpenPanelContext).toBeCalled();
});

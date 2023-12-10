import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OpenCreatePanelProvider from "../../../context/OpenCreatePanelContext";
import OpenCreatePanelBtn from "../OpenCreatePanelBtn";

const mockOpenPanelContext = jest.fn();

jest.mock("../../../hooks/useOpenCreatePanel", () =>
  jest.fn(() => [mockOpenPanelContext]),
);

beforeEach(() => {
  jest.clearAllMocks();
});

test("Should open the panel when the button is clicked", async () => {
  render(
    <OpenCreatePanelProvider>
      <OpenCreatePanelBtn />
    </OpenCreatePanelProvider>,
  );

  const openPanelBtn = screen.getByRole("button");
  await userEvent.click(openPanelBtn);

  expect(openPanelBtn).toBeInTheDocument();
  expect(mockOpenPanelContext).toBeCalled();
});

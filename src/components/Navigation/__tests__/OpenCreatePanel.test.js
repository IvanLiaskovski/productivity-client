import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OpenCreatePanelProvider from "../../../context/OpenCreatePanelContext";
import OpenCreatePanelBtn from "../OpenCreatePanelBtn";

const mockOpenPanelContext = {
  isOpen: false,
  setOpen: jest.fn(),
};

test("Should open the panel when the button is clicked", async () => {
  const wrapper = ({ children }) => (
    <OpenCreatePanelProvider {...mockOpenPanelContext}>
      {children}
    </OpenCreatePanelProvider>
  );

  render(<OpenCreatePanelBtn />, { wrapper });

  const openPanelBtn = screen.getByRole("button");
  await userEvent.click(openPanelBtn);

  expect(openPanelBtn).toBeInTheDocument();
  expect(mockOpenPanelContext.setOpen).toBeCalled();
});

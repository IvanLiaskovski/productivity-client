import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";

const mockOnClose = jest.fn();

test("Should call onClose function after click on modal wrapper", async () => {
  render(<Modal onClose={mockOnClose}>Test</Modal>);

  const modalWrapper = screen.getByTestId("modal-wrapper");
  expect(modalWrapper).toBeInTheDocument();

  await userEvent.click(modalWrapper);
  expect(mockOnClose).toBeCalled();
});

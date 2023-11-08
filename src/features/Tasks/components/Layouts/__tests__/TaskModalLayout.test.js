import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import TaskModalLayout from "../TaskModalLayout";

jest.mock("react-router", () => ({
  useParams: () => ({
    "*": "week",
  }),
}));

test("Should display content in modal", () => {
  render(<TaskModalLayout>TestContent</TaskModalLayout>, {
    wrapper: MemoryRouter,
    initialProps: { initialEntries: ["/task/week"] },
  });

  const modalWrapper = screen.getByTestId("modal-wrapper");
  waitFor(() => {
    expect(modalWrapper).toBeInTheDocument();
  });
});

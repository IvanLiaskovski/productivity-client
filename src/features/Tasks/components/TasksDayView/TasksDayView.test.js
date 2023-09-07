import { describe, expect, test } from "@jest/globals";
import { render, screen } from "../../../utils/test-util";
import App from "../../../App";

test("Test jest/react-library functionality", () => {
  render(<App />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Create Task");
});

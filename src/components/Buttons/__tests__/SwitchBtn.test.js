import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SwitchBtn from "../SwitchBtn";

const clickEventMock = jest.fn();

test("SwitchBtn render and switch", async () => {
  const user = userEvent.setup();
  render(
    <SwitchBtn
      onClick={() => clickEventMock()}
      circleClassName="ml-2"
      className="mt-2"
    >
      Change mode
    </SwitchBtn>,
  );

  const switchBtn = screen.getByRole("button");
  const switchBtnWrapper = screen.getByTestId("switch-btn-wrapper");
  const switchCircle = screen.getByTestId("switch-btn-circle");

  expect(switchBtn).toBeInTheDocument();
  expect(switchBtnWrapper).toBeInTheDocument();
  expect(switchCircle).toBeInTheDocument();

  expect(switchBtnWrapper).toHaveClass("mt-2");
  expect(switchCircle).toHaveClass("ml-2");

  await user.click(switchBtn);
  expect(clickEventMock).toBeCalled();
});

test("SwitchBtn Active test", async () => {
  render(<SwitchBtn isActive>Change mode</SwitchBtn>);

  const switchBtnWrapper = screen.getByTestId("switch-btn-wrapper");
  const switchCircle = screen.getByTestId("switch-btn-circle");

  await waitFor(() => {
    expect(switchBtnWrapper).toHaveClass("translate-x-[calc(100%-16px)]");
    expect(switchCircle).toHaveClass("bg-blue-300");
  });
});

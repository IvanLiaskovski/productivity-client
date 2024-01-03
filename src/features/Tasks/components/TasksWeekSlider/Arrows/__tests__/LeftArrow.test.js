import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDatesRangeProvider } from "../../../../context/TasksDatesRangeContext";
import LeftArrow from "../LeftArrow";

const slickMockRef = {
  current: { innerSlider: { state: { currentSlide: 0 } } },
};
const onClickMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("Move date range back", async () => {
  render(
    <TasksDatesRangeProvider>
      <LeftArrow onClick={onClickMock} sliderRef={slickMockRef} />
    </TasksDatesRangeProvider>,
  );

  const leftButton = screen.getByRole("button");
  expect(leftButton).toBeInTheDocument();

  await userEvent.click(leftButton);
  expect(onClickMock).toBeCalled();
});

test("Does not call moveDateBack when isSwipe is true", async () => {
  render(
    <TasksDatesRangeProvider>
      <LeftArrow
        onClick={onClickMock}
        sliderRef={slickMockRef}
        isSwipe={true}
      />
    </TasksDatesRangeProvider>,
  );

  const leftButton = screen.getByRole("button");
  expect(leftButton).toBeInTheDocument();

  await userEvent.click(leftButton);
  expect(onClickMock).not.toBeCalled();
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksDatesRangeProvider } from "../../../../context/TasksDatesRangeContext";
import RightArrow from "../RightArrow";

const slickMockRef = {
  current: { innerSlider: { state: { currentSlide: 14 } } },
};

const onClickMock = jest.fn(() => false);

afterEach(() => {
  jest.clearAllMocks();
});

test("Move date range forward", async () => {
  render(
    <TasksDatesRangeProvider>
      <RightArrow onClick={onClickMock} sliderRef={slickMockRef} />
    </TasksDatesRangeProvider>,
  );

  const rightButton = screen.getByRole("button");
  expect(rightButton).toBeInTheDocument();

  await userEvent.click(rightButton);

  expect(onClickMock).toBeCalled();
});

test("Does not call moveDateForward when isSwipe is true", async () => {
  render(
    <TasksDatesRangeProvider>
      <RightArrow
        onClick={onClickMock}
        sliderRef={slickMockRef}
        isSwipe={true}
      />
    </TasksDatesRangeProvider>,
  );

  const rightButton = screen.getByRole("button");

  expect(rightButton).toBeInTheDocument();

  await userEvent.click(rightButton);
  expect(onClickMock).not.toBeCalled();
});

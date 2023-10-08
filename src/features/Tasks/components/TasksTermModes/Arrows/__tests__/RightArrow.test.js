import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment";
import { TasksDatesRangeProvider } from "../../../../context/TasksDatesRangeContext";
import RightArrow from "../RightArrow";

const mockDateRangeProps = {
  setDatesRange: jest.fn(
    (newDate) => (mockDateRangeProps.datesRange = newDate),
  ),
  datesRange: moment().format("YYYY-MM-DD"),
};

const slickMockRef = {
  current: { innerSlider: { state: { currentSlide: 14 } } },
};

const onClickMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
  mockDateRangeProps.datesRange = moment().format("YYYY-MM-DD");
});

test("Move date range forward", async () => {
  render(
    <TasksDatesRangeProvider {...mockDateRangeProps}>
      <RightArrow onClick={onClickMock} sliderRef={slickMockRef} />
    </TasksDatesRangeProvider>,
  );

  const rightButton = screen.getByRole("button");
  expect(rightButton).toBeInTheDocument();

  await userEvent.click(rightButton);
  expect(onClickMock).toBeCalled();
  expect(mockDateRangeProps.setDatesRange).toBeCalled();

  expect(mockDateRangeProps.datesRange).toBe(
    moment().add(3, "week").format("YYYY-MM-DD"),
  );
});

test("Does not call moveDateForward when isSwipe is true", async () => {
  render(
    <TasksDatesRangeProvider {...mockDateRangeProps}>
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
  expect(mockDateRangeProps.setDatesRange).not.toBeCalled();

  expect(mockDateRangeProps.datesRange).toBe(moment().format("YYYY-MM-DD"));
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment";
import { TasksDatesRangeProvider } from "../../../../context/TasksDatesRangeContext";
import LeftArrow from "../LeftArrow";

const mockDateRangeProps = {
  setDatesRange: jest.fn(
    (newDate) => (mockDateRangeProps.datesRange = newDate),
  ),
  datesRange: moment().format("YYYY-MM-DD"),
};

const slickMockRef = {
  current: { innerSlider: { state: { currentSlide: 0 } } },
};

const onClickMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
  mockDateRangeProps.datesRange = moment().format("YYYY-MM-DD");
});

test("Move date range back", async () => {
  render(
    <TasksDatesRangeProvider {...mockDateRangeProps}>
      <LeftArrow onClick={onClickMock} sliderRef={slickMockRef} />
    </TasksDatesRangeProvider>,
  );

  const leftButton = screen.getByRole("button");
  expect(leftButton).toBeInTheDocument();

  await userEvent.click(leftButton);
  expect(onClickMock).toBeCalled();
  expect(mockDateRangeProps.setDatesRange).toBeCalled();

  expect(mockDateRangeProps.datesRange).toBe(
    moment().add(-3, "week").format("YYYY-MM-DD"),
  );
});

test("Does not call moveDateBack when isSwipe is true", async () => {
  render(
    <TasksDatesRangeProvider {...mockDateRangeProps}>
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
  expect(mockDateRangeProps.setDatesRange).not.toBeCalled();

  expect(mockDateRangeProps.datesRange).toBe(moment().format("YYYY-MM-DD"));
});

import { render, screen } from "@testing-library/react";
import moment from "moment";
import SlideWeekItem from "../SlideWeekItem";

test("Show week and date", () => {
  render(
    <SlideWeekItem
      weekName="Monday"
      itemDate={moment().format("YYYY-MM-DD")}
    />,
  );

  const week = screen.getByText("Monday");
  const date = screen.getByText(moment().format("YYYY-MM-DD"));

  expect(week).toBeInTheDocument();
  expect(date).toBeInTheDocument();
});

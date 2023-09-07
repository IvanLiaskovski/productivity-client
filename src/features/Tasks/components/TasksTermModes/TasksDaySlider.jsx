import { useEffect, useRef, useState } from "react";
import { useTasksDateRangeContext } from "../../context/TasksDateRangeContext";
import { createMonthDaysArray } from "../../helpers/tasksHelpers";
import { formatDate } from "../../../../helpers/formatDate";
import { twMerge } from "tailwind-merge";

import Slider from "react-slick";
import SlideItem from "./SlideItem";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TasksDaySlider = () => {
  const { date } = useTasksDateRangeContext();
  const [slides, setSlides] = useState(createMonthDaysArray(date));
  const [isSwipe, setIsSwipe] = useState();

  const sliderRef = useRef();
  const styles = twMerge(
    "w-full z-0 my-2 rounded-lg bg-block text-center text-white px-2 py-3 lg:px-10 lg:py-4",
  );

  const enableClickWhileSwipe = () => {
    setIsSwipe(true);
    setTimeout(() => {
      setIsSwipe(false);
    }, 150);
  };

  useEffect(() => {
    setSlides(createMonthDaysArray(date));
  }, [date, setSlides]);

  useEffect(() => {
    sliderRef.current.slickGoTo(
      slides.findIndex((slide) => slide.date == formatDate(date)),
    );
  }, [slides, date]);

  return (
    <AppearAnimation animationType="fade">
      <Slider
        arrows={false}
        draggable
        centerMode
        centerPadding="0"
        swipeToSlide
        slidesToShow={7}
        onSwipe={enableClickWhileSwipe}
        className={styles}
        ref={sliderRef}
      >
        {slides.map((slide) => {
          return (
            <SlideItem
              {...slide}
              key={slide.date}
              isSwipe={isSwipe}
              isActive={slide.date === formatDate(date)}
            />
          );
        })}
      </Slider>
    </AppearAnimation>
  );
};

export default TasksDaySlider;

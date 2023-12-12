import PropTypes from "prop-types";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTasksDatesRangeContext } from "../../context/TasksDatesRangeContext";
import { useTasksDateContext } from "../../context/TasksDateContext";
import useMoveDateRange from "../../hooks/useMoveDateRange";
import { useManualDateChangeContext } from "../../context/TasksManualDateChangeContext";
import { useMediaQuery } from "react-responsive";
import { createWeekDatesRange } from "../../helpers/tasksHelpers";
import { twMerge } from "tailwind-merge";

import Slider from "react-slick";
import AppearAnimation from "../../../../components/AnimationsHOC/AppearAnimation";
import RightArrow from "./Arrows/RightArrow";
import LeftArrow from "./Arrows/LeftArrow";

import "slick-carousel/slick/slick.css";

const TasksTermSlider = ({ SlideItem }) => {
  const { isManualChange, setManualChange } = useManualDateChangeContext();
  const { datesRange } = useTasksDatesRangeContext();
  const { setDate } = useTasksDateContext();
  const [slides, setSlides] = useState(createWeekDatesRange(datesRange));
  const [isSwipe, setIsSwipe] = useState(false);
  const [isSettingDate, setIsSettingDate] = useState(false);
  const moveDate = useMoveDateRange();
  const isScreenMedium = useMediaQuery({ query: "(min-width: 	768px)" });
  let timeOut;

  const sliderRef = useRef();
  const styles = twMerge(
    "relative w-full z-0 my-2 rounded-lg bg-block text-center text-white px-2 py-3 lg:px-10 lg:py-4",
  );

  useEffect(() => {
    setSlides(createWeekDatesRange(datesRange));
    sliderRef.current.slickGoTo(7);
    setIsSettingDate(true);
  }, [datesRange, setSlides]);

  const swipeHandler = useCallback(
    () =>
      function swipeHandler() {
        const currentSlideIndex =
          sliderRef.current.innerSlider.state.currentSlide;
        const startX = sliderRef.current.innerSlider.state.touchObject.startX;
        const endX = sliderRef.current.innerSlider.state.touchObject.curX;

        if (startX > endX) {
          const allowDateChange = currentSlideIndex === 14;
          if (allowDateChange) {
            moveDate(3, true);
          }
        } else if (startX < endX) {
          const allowDateChange = currentSlideIndex === 0;
          if (allowDateChange) {
            moveDate(-3, true);
          }
        }
      },
  );

  function handleBeforeChange() {
    if (isSettingDate) {
      setIsSettingDate(false);
      return;
    }
    setIsSwipe(true);

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setIsSwipe(false);
    }, 1000);
  }

  function handleAfterCahnge(index) {
    setIsSwipe(false);
    if (isManualChange) {
      setManualChange(false);
      return;
    }
    setDate(sliderRef.current.props.children[index].key);
  }

  return (
    <AppearAnimation animationType="fade">
      <Slider
        arrows={isScreenMedium}
        draggable
        slidesToShow={7}
        slidesToScroll={7}
        initialSlide={7}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterCahnge}
        nextArrow={<RightArrow sliderRef={sliderRef} isSwipe={isSwipe} />}
        prevArrow={<LeftArrow sliderRef={sliderRef} isSwipe={isSwipe} />}
        onSwipe={swipeHandler}
        className={styles}
        ref={sliderRef}
      >
        {slides.map((slide) => {
          return (
            <SlideItem {...slide} key={slide.itemDate} isSwipe={isSwipe} />
          );
        })}
      </Slider>
    </AppearAnimation>
  );
};

TasksTermSlider.propTypes = {
  SlideItem: PropTypes.elementType,
};

export default TasksTermSlider;

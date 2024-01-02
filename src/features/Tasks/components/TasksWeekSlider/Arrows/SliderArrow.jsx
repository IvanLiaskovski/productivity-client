import PropTypes from "prop-types";
import useMoveDateRange from "../../../hooks/useMoveDateRange";
import { twMerge } from "tailwind-merge";

const SliderArrow = ({
  compareIndex,
  moveByWeeks,
  sliderRef,
  isSwipe,
  onClick,
  className,
  children,
}) => {
  const moveDate = useMoveDateRange();
  const styles = twMerge(
    "absolute top-1/2 -translate-y-1/2 text-primary-900 transition-colors hover:text-blue-300",
    className,
  );

  function moveDateBack() {
    if (isSwipe) return;
    const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
    const allowDateChange = currentSlideIndex === compareIndex;

    onClick();
    moveDate(moveByWeeks, allowDateChange);
  }

  return (
    <button onClick={moveDateBack} className={styles}>
      {children}
    </button>
  );
};

SliderArrow.propTypes = {
  compareIndex: PropTypes.number,
  moveByWeeks: PropTypes.number,
  sliderRef: PropTypes.object,
  isSwipe: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SliderArrow;

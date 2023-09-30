import useMoveDateRange from "../../../hooks/useMoveDateRange";
import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";

const RightArrow = ({ onClick, sliderRef, isSwipe }) => {
  const moveDate = useMoveDateRange();
  const styles = twMerge(
    "absolute -right-10 top-1/2 h-4 w-4 -translate-y-1/2 text-8xl text-primary-900 transition-colors hover:text-blue-300",
  );

  function moveDateForward() {
    if (isSwipe) return;
    const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
    const allowDateChange = currentSlideIndex === 14;

    onClick();
    moveDate(3, allowDateChange);
  }

  return (
    <button onClick={moveDateForward} className={styles}>
      <FaChevronRight className="text-3xl" />
    </button>
  );
};

export default RightArrow;

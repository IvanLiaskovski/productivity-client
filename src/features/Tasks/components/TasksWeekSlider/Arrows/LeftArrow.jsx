import PropTypes from "prop-types";
import SliderArrow from "./SliderArrow";
import { FaChevronLeft } from "react-icons/fa";

const LeftArrow = ({ onClick, sliderRef, isSwipe }) => {
  return (
    <SliderArrow
      compareIndex={0}
      moveByWeeks={-3}
      onClick={onClick}
      sliderRef={sliderRef}
      isSwipe={isSwipe}
      className="-left-6 lg:-left-10"
    >
      <FaChevronLeft className="text-2xl lg:text-3xl" />
    </SliderArrow>
  );
};

LeftArrow.propTypes = {
  onClick: PropTypes.func,
  sliderRef: PropTypes.object,
  isSwipe: PropTypes.bool,
};

export default LeftArrow;

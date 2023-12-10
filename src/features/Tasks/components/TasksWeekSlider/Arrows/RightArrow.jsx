import PropTypes from "prop-types";
import SliderArrow from "./SliderArrow";
import { FaChevronRight } from "react-icons/fa";

const RightArrow = ({ onClick, sliderRef, isSwipe }) => {
  return (
    <SliderArrow
      compareIndex={14}
      moveByWeeks={3}
      onClick={onClick}
      sliderRef={sliderRef}
      isSwipe={isSwipe}
      className="-right-6 lg:-right-10"
    >
      <FaChevronRight className="text-2xl lg:text-3xl" />
    </SliderArrow>
  );
};

RightArrow.propTypes = {
  onClick: PropTypes.func,
  sliderRef: PropTypes.object,
  isSwipe: PropTypes.bool,
};

export default RightArrow;

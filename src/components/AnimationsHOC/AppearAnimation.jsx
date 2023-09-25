import PropTypes from "prop-types";
import { useSpring, animated, easings } from "react-spring";

const animationTypes = {
  fade: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  slideDown: {
    from: {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
};

const AppearAnimation = ({ animationType, reset, className, children }) => {
  const springStyles = useSpring({
    ...animationTypes[animationType],
    config: { easings: easings.steps(5) },
    reset,
  });

  return (
    <animated.div className={className} style={springStyles}>
      {children}
    </animated.div>
  );
};

AppearAnimation.propTypes = {
  animationType: PropTypes.oneOf(Object.keys(animationTypes)),
  reset: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppearAnimation;

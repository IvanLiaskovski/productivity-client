import PropTypes from "prop-types";
import { IconContext } from "react-icons/lib";

const IconContextProvider = ({ value, children }) => {
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};

IconContextProvider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default IconContextProvider;

import PropTypes from "prop-types";
import { createContext, useContext } from "react";

const OpenCreatePanelContext = createContext(false);

const OpenCreatePanelProvider = ({ isOpen, setOpen, children }) => {
  return (
    <OpenCreatePanelContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </OpenCreatePanelContext.Provider>
  );
};

OpenCreatePanelProvider.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useOpenCreatePanelContext() {
  return useContext(OpenCreatePanelContext);
}

export default OpenCreatePanelProvider;

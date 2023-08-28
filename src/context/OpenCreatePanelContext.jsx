import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const OpenCreatePanelContext = createContext(false);

const OpenCreatePanelProvider = ({ children }) => {
  const [isOpen, setOpen] = useState();

  return (
    <OpenCreatePanelContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </OpenCreatePanelContext.Provider>
  );
};

OpenCreatePanelProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useOpenCreatePanelContext() {
  return useContext(OpenCreatePanelContext);
}

export default OpenCreatePanelProvider;

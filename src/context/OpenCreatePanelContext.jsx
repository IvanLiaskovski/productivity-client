import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import { useState } from "react";

const OpenCreatePanelContext = createContext(false);

const OpenCreatePanelProvider = ({ open = false, children }) => {
  const [isOpen, setOpen] = useState(open);

  return (
    <OpenCreatePanelContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </OpenCreatePanelContext.Provider>
  );
};

OpenCreatePanelProvider.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export function useOpenCreatePanelContext() {
  return useContext(OpenCreatePanelContext);
}

export default OpenCreatePanelProvider;

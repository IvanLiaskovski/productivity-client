import { useEffect } from "react";
import { useOpenCreatePanelContext } from "../context/OpenCreatePanelContext";

function useOpenCreatePanel() {
  const { isOpen, setOpen } = useOpenCreatePanelContext();

  function openPanel() {
    setOpen(true);
  }

  useEffect(() => {
    function closeCreatePanel(e) {
      if (!e.target.closest(".create-panel")) {
        setOpen(false);
      }
    }

    if (isOpen) {
      setTimeout(() => window.addEventListener("click", closeCreatePanel), 100);
      return () => window.removeEventListener("click", closeCreatePanel);
    }
  }, [isOpen, setOpen]);

  return [openPanel];
}

export default useOpenCreatePanel;

import { useState } from "react";

export function useToggle(defaultValue) {
  const [isOpen, setOpen] = useState(defaultValue);

  function toggle(value) {
    setOpen((current) => (typeof value === "boolean" ? value : !current));
  }

  return [isOpen, toggle];
}

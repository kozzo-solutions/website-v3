import { useState, useEffect } from "react";

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };

    setIsTouchDevice(checkIfTouchDevice());

    // Also listen for resize events in case device orientation changes
    const handleResize = () => {
      setIsTouchDevice(checkIfTouchDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTouchDevice;
};

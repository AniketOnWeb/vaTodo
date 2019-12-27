import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elref = useRef(null);
  if (!elref.current) {
    const div = document.createElement("div");
    elref.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elref.current);

    return () => {
      modalRoot.removeChild(elref.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elref.current);
};

export default Modal;

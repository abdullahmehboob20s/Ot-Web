import React from "react";

const OutsideClickDetector = (handler: Function) => {
  let domNode = React.useRef<any>(null);

  React.useEffect(() => {
    const func = (e: Event) => {
      if (!domNode.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", func);

    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return domNode;
};

export default OutsideClickDetector;

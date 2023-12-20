import React, { useEffect, useCallback, useRef } from "react";

const useDebouncedEffect = (effect, delay, deps) => {
  const firstRenderRef = useRef(true);
  const callback = useCallback(effect, deps);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

export default useDebouncedEffect;

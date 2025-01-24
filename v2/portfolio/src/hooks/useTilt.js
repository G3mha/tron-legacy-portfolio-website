import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export const useTilt = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    VanillaTilt.init(element, {
      max: 25,
      speed: 400,
      ...options,
    });

    return () => element.vanillaTilt.destroy();
  }, [options]);

  return elementRef;
};

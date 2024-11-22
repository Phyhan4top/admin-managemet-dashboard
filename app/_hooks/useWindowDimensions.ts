"use client"
import theme from '@material-tailwind/react/theme';
import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
      isMobile: width < 767,
    };
  }

  return {
    width: theme.breakpoints?.values?.lg,
    height: theme.breakpoints?.values?.lg,
    isMobile: false,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;

"use client";
import { useEffect, useState } from "react";
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
    setIsTablet(width > 768 && width <= 1266);
    setIsDesktop(width > 1266);
  };
  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []); 
  return { isMobile, isDesktop, isTablet };
};
export default useResponsive;
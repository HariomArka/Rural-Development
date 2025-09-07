import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook to scroll to top on route changes
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    });
  }, [pathname]);
};

// Alternative version with more control
export const useScrollToTopOnMount = (dependencies = []) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, dependencies);
};
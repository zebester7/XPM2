
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Automatically scrolls the window to top (0, 0) whenever the route changes.
 * Essential for SPA navigation consistency.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard window scroll reset
    window.scrollTo(0, 0);
    
    // Optional: Also reset document element for broader browser compatibility
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

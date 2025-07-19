import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

// Global Lenis instance
let lenis: Lenis | null = null;

/**
 * Initialize Lenis smooth scrolling
 */
export const initializeLenisScroll = () => {
  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2, // Animation duration in seconds
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    orientation: 'vertical', // vertical, horizontal
    gestureOrientation: 'vertical', // vertical, horizontal, both
    smoothWheel: true, // Smooth wheel scrolling
    wheelMultiplier: 1, // Wheel sensitivity
    touchMultiplier: 2, // Touch sensitivity
    normalizeWheel: true, // Normalize wheel delta
    infinite: false, // Infinite scrolling
  });

  // Integrate with GSAP ticker for smooth performance
  gsap.ticker.add((time) => {
    if (lenis) {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    }
  });

  // Disable lag smoothing to prevent scroll delays
  gsap.ticker.lagSmoothing(0);

  // Optional: Log scroll events for debugging
  lenis.on('scroll', (e: any) => {
    // console.log('Lenis scroll:', e);
  });

  return lenis;
};

/**
 * Get the current Lenis instance
 */
export const getLenisInstance = (): Lenis | null => {
  return lenis;
};

/**
 * Smooth scroll to element using Lenis + GSAP
 * @param target - CSS selector or element
 * @param offset - Offset in pixels (default: 80 for navbar)
 * @param duration - Animation duration in seconds (default: 1.5)
 * @param onComplete - Callback function when animation completes
 */
export const lenisScrollTo = (
  target: string | Element,
  offset: number = 80,
  duration: number = 1.5,
  onComplete?: () => void
) => {
  if (!lenis) {
    console.warn('Lenis not initialized. Call initializeLenisScroll() first.');
    return;
  }

  let targetElement: Element | null = null;

  if (typeof target === 'string') {
    targetElement = document.querySelector(target);
  } else if (target instanceof Element) {
    targetElement = target;
  }

  if (!targetElement) {
    console.warn(`Target element not found: ${target}`);
    return;
  }

  // Calculate scroll position with offset
  const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const scrollToPosition = elementTop - offset;

  // Use Lenis scrollTo method for smooth scrolling
  lenis.scrollTo(scrollToPosition, {
    duration: duration,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    onComplete: onComplete
  });
};

/**
 * Smooth scroll to top using Lenis
 * @param duration - Animation duration in seconds (default: 1.2)
 * @param onComplete - Callback function when animation completes
 */
export const lenisScrollToTop = (
  duration: number = 1.2,
  onComplete?: () => void
) => {
  if (!lenis) {
    console.warn('Lenis not initialized. Call initializeLenisScroll() first.');
    return;
  }

  lenis.scrollTo(0, {
    duration: duration,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    onComplete: onComplete
  });
};

/**
 * Handle navigation clicks with Lenis smooth scrolling
 * @param e - React mouse event
 * @param targetId - Target element ID or selector
 * @param onComplete - Optional callback function
 * @param duration - Animation duration in seconds (default: 1.5)
 */
export const handleLenisScrollClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  targetId: string,
  onComplete?: () => void,
  duration: number = 1.5
) => {
  e.preventDefault();

  if (targetId === '#' || targetId === '' || targetId === '#top') {
    lenisScrollToTop(duration, onComplete);
  } else {
    lenisScrollTo(targetId, 80, duration, onComplete);
  }
};

/**
 * Start Lenis smooth scrolling
 */
export const startLenisScroll = () => {
  if (lenis) {
    lenis.start();
  }
};

/**
 * Stop Lenis smooth scrolling
 */
export const stopLenisScroll = () => {
  if (lenis) {
    lenis.stop();
  }
};

/**
 * Destroy Lenis instance and cleanup
 */
export const destroyLenisScroll = () => {
  if (lenis) {
    lenis.destroy();
    lenis = null;
    gsap.ticker.remove(() => {});
  }
};

/**
 * Configuration presets for different scroll behaviors
 */
export const LenisScrollConfig = {
  smooth: {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  },
  fast: {
    duration: 0.8,
    easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
  },
  slow: {
    duration: 2.0,
    easing: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, // easeInOutQuad
  },
  bouncy: {
    duration: 1.5,
    easing: (t: number) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return c3 * t * t * t - c1 * t * t;
    }, // easeOutBack
  }
} as const;
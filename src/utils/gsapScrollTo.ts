import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

/**
 * GSAP smooth scroll to target element or position
 * @param target - CSS selector, element, or position (number)
 * @param duration - Animation duration in seconds (default: 2)
 * @param ease - GSAP easing function (default: "power2.inOut")
 * @param offset - Additional offset from navbar (default: 80px)
 */
export const gsapScrollTo = (
  target: string | number | Element,
  duration: number = 2,
  ease: string = "power2.inOut",
  offset: number = 80
) => {
  let scrollTarget: string | number;

  if (typeof target === 'string') {
    // If it's a CSS selector, find the element and calculate position with offset
    const element = document.querySelector(target);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      scrollTarget = elementTop - offset;
    } else {
      console.warn(`Element with selector "${target}" not found`);
      return;
    }
  } else if (typeof target === 'number') {
    scrollTarget = target;
  } else if (target instanceof Element) {
    const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
    scrollTarget = elementTop - offset;
  } else {
    console.warn('Invalid target type provided');
    return;
  }

  // Animate scroll with GSAP
  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: scrollTarget,
      autoKill: true
    },
    ease: ease,
    onComplete: () => {
      // Optional: callback when scroll completes
    }
  });
};

/**
 * GSAP smooth scroll to top
 * @param duration - Animation duration in seconds (default: 1.5)
 * @param ease - GSAP easing function (default: "power2.inOut")
 */
export const gsapScrollToTop = (
  duration: number = 1.5,
  ease: string = "power2.inOut"
) => {
  gsap.to(window, {
    duration: duration,
    scrollTo: { y: 0, autoKill: true },
    ease: ease
  });
};

/**
 * Handle anchor click events with GSAP smooth scrolling
 * @param e - React mouse event
 * @param targetId - Target element ID or selector
 * @param onComplete - Optional callback function
 * @param duration - Animation duration in seconds (default: 2)
 */
export const handleGsapScrollClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  targetId: string,
  onComplete?: () => void,
  duration: number = 2
) => {
  e.preventDefault();
  
  if (targetId === '#' || targetId === '' || targetId === '#top') {
    gsapScrollToTop(duration);
  } else {
    gsapScrollTo(targetId, duration);
  }
  
  // Call completion callback (useful for closing mobile menus)
  if (onComplete) {
    setTimeout(() => onComplete(), duration * 1000);
  }
};

/**
 * Configuration for GSAP ScrollToPlugin
 */
export const configureGsapScrollTo = () => {
  // Configure global autoKill behavior if needed
  // ScrollToPlugin.config({ autoKill: true });
};

/**
 * Easing presets for different scroll behaviors
 */
export const ScrollEasing = {
  smooth: "power2.inOut",
  bouncy: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  quick: "power3.out",
  gentle: "power1.inOut"
} as const;

/**
 * Duration presets for different scroll speeds
 */
export const ScrollDuration = {
  instant: 0.3,
  fast: 1,
  normal: 2,
  slow: 3,
  verySlow: 4
} as const;
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(SplitText);

/**
 * SplitText Animation Types
 */
export type SplitType = 'chars' | 'words' | 'lines' | 'chars,words' | 'words,lines' | 'chars,lines' | 'chars,words,lines';

export interface SplitTextConfig {
  type: SplitType;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  trigger?: string;
  scrub?: boolean | number;
  start?: string;
  end?: string;
}

/**
 * Animation Presets
 */
export const SplitTextPresets = {
  fadeInUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 0.8, ease: "power2.out", stagger: 0.05 }
  },
  fadeInDown: {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 0.8, ease: "power2.out", stagger: 0.05 }
  },
  slideInLeft: {
    from: { opacity: 0, x: -100, skewX: 15 },
    to: { opacity: 1, x: 0, skewX: 0 },
    config: { duration: 1, ease: "power3.out", stagger: 0.03 }
  },
  slideInRight: {
    from: { opacity: 0, x: 100, skewX: -15 },
    to: { opacity: 1, x: 0, skewX: 0 },
    config: { duration: 1, ease: "power3.out", stagger: 0.03 }
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.5, rotation: 180 },
    to: { opacity: 1, scale: 1, rotation: 0 },
    config: { duration: 1.2, ease: "back.out(1.7)", stagger: 0.08 }
  },
  wave: {
    from: { opacity: 0, y: 100, skewY: 10 },
    to: { opacity: 1, y: 0, skewY: 0 },
    config: { duration: 0.6, ease: "power2.out", stagger: 0.1 }
  },
  typewriter: {
    from: { width: 0, opacity: 0 },
    to: { width: "auto", opacity: 1 },
    config: { duration: 0.05, ease: "none", stagger: 0.05 }
  },
  bounce: {
    from: { opacity: 0, y: -200, rotation: 360 },
    to: { opacity: 1, y: 0, rotation: 0 },
    config: { duration: 1.5, ease: "bounce.out", stagger: 0.1 }
  }
};

/**
 * Create SplitText animation with ScrollTrigger
 */
export const createSplitTextAnimation = (
  selector: string | Element,
  preset: keyof typeof SplitTextPresets,
  config?: Partial<SplitTextConfig>
): { split: SplitText; timeline: gsap.core.Timeline } => {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
  
  if (!element) {
    console.warn(`SplitText: Element not found - ${selector}`);
    return { split: null as any, timeline: gsap.timeline() };
  }

  // Default configuration
  const defaultConfig: SplitTextConfig = {
    type: 'chars',
    duration: 0.8,
    delay: 0,
    stagger: 0.05,
    ease: "power2.out",
    trigger: element as Element,
    start: "top 80%",
    end: "bottom 20%",
    scrub: false
  };

  const finalConfig = { ...defaultConfig, ...config };
  const animationPreset = SplitTextPresets[preset];

  // Make element visible before splitting
  (element as HTMLElement).style.visibility = 'visible';
  
  // Create SplitText instance
  const split = new SplitText(element, { type: finalConfig.type });

  // Set initial state
  gsap.set(split.chars || split.words || split.lines, animationPreset.from);

  // Create timeline
  const tl = gsap.timeline({
    scrollTrigger: finalConfig.trigger ? {
      trigger: finalConfig.trigger,
      start: finalConfig.start,
      end: finalConfig.end,
      scrub: finalConfig.scrub,
      toggleActions: "play none none reverse"
    } : undefined,
    delay: finalConfig.delay
  });

  // Add animation to timeline
  tl.to(split.chars || split.words || split.lines, {
    ...animationPreset.to,
    ...animationPreset.config,
    stagger: finalConfig.stagger
  });

  return { split, timeline: tl };
};

/**
 * Simple SplitText animation without ScrollTrigger
 */
export const animateSplitText = (
  selector: string | Element,
  preset: keyof typeof SplitTextPresets,
  options?: Partial<SplitTextConfig>
): { split: SplitText; timeline: gsap.core.Timeline } => {
  return createSplitTextAnimation(selector, preset, { ...options, trigger: undefined });
};

/**
 * Reveal text on scroll with mask effect
 */
export const createMaskedTextReveal = (
  selector: string | Element,
  config?: Partial<SplitTextConfig>
): { split: SplitText; timeline: gsap.core.Timeline } => {
  const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
  
  if (!element) {
    console.warn(`SplitText: Element not found - ${selector}`);
    return { split: null as any, timeline: gsap.timeline() };
  }

  const finalConfig = {
    type: 'lines' as SplitType,
    duration: 1.2,
    stagger: 0.1,
    ease: "power3.out",
    trigger: element as Element,
    start: "top 85%",
    ...config
  };

  // Create SplitText with masking
  const split = new SplitText(element, { 
    type: finalConfig.type,
    linesClass: "split-line",
    wordsClass: "split-word",
    charsClass: "split-char"
  });

  // Wrap each line in a mask
  split.lines?.forEach((line) => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    line.parentNode?.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  // Set initial state
  gsap.set(split.lines, { y: 100 });

  // Create animation timeline
  const tl = gsap.timeline({
    scrollTrigger: finalConfig.trigger ? {
      trigger: finalConfig.trigger,
      start: finalConfig.start,
      toggleActions: "play none none reverse"
    } : undefined
  });

  tl.to(split.lines, {
    y: 0,
    duration: finalConfig.duration,
    ease: finalConfig.ease,
    stagger: finalConfig.stagger
  });

  return { split, timeline: tl };
};

/**
 * Cleanup SplitText instances
 */
export const cleanupSplitText = (split: SplitText): void => {
  if (split && split.revert) {
    split.revert();
  }
};

/**
 * Batch animate multiple elements
 */
export const batchAnimateSplitText = (
  elements: (string | Element)[],
  preset: keyof typeof SplitTextPresets,
  config?: Partial<SplitTextConfig>
): Array<{ split: SplitText; timeline: gsap.core.Timeline }> => {
  return elements.map((element, index) => 
    createSplitTextAnimation(element, preset, {
      ...config,
      delay: (config?.delay || 0) + (index * 0.2)
    })
  );
};

/**
 * React Hook for SplitText animations
 */
export const useSplitTextAnimation = () => {
  const animations: Array<{ split: SplitText; timeline: gsap.core.Timeline }> = [];

  const createAnimation = (
    selector: string | Element,
    preset: keyof typeof SplitTextPresets,
    config?: Partial<SplitTextConfig>
  ) => {
    const animation = createSplitTextAnimation(selector, preset, config);
    animations.push(animation);
    return animation;
  };

  const cleanup = () => {
    animations.forEach(({ split, timeline }) => {
      timeline.kill();
      cleanupSplitText(split);
    });
    animations.length = 0;
  };

  return { createAnimation, cleanup };
};
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { lenisScrollTo } from '../utils/lenisScrollTo';
import { createSplitTextAnimation, animateSplitText } from '../utils/splitTextAnimations';

const Hero: React.FC = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Mouse movement tracking for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    // Only enable mouse parallax on desktop and if motion is not reduced
    if (window.innerWidth > 768 && !prefersReducedMotion) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Transform values for background parallax (disabled if reduced motion)
  const backgroundX = useTransform(mouseX, [0, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);
  const backgroundY = useTransform(mouseY, [0, 1], prefersReducedMotion ? [0, 0] : [-10, 10]);

  // Initialize SplitText animations
  useEffect(() => {
    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        // Animate title with wave effect
        if (titleRef.current) {
          animateSplitText(titleRef.current, 'wave', {
            type: 'chars',
            delay: 0.2,
            stagger: 0.05
          });
        }

        // Animate subtitle with fade in up effect
        if (subtitleRef.current) {
          animateSplitText(subtitleRef.current, 'fadeInUp', {
            type: 'words',
            delay: 1.0,
            stagger: 0.1
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Show immediately if reduced motion is preferred
      if (titleRef.current) titleRef.current.style.visibility = 'visible';
      if (subtitleRef.current) subtitleRef.current.style.visibility = 'visible';
    }
  }, [prefersReducedMotion]);

  // Animation variants (respect reduced motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        staggerChildren: prefersReducedMotion ? 0.05 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 10 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 10 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        staggerChildren: prefersReducedMotion ? 0.02 : 0.1,
        delayChildren: prefersReducedMotion ? 0.1 : 0.8
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 0.95 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.15 : 0.5,
        ease: prefersReducedMotion ? "easeOut" : "backOut"
      }
    }
  };
  return (
    <motion.section 
      ref={heroRef}
      className="relative h-[80vh] min-h-[500px] w-full bg-cover bg-center text-white overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxi96oz6nwmQQrYa-TVNt0ZsB6oivVkUvltPibIK0gYejp7OXylwBExnAMPwVzmblVnrbh5vN12Pf-NVqNJ1UAsTFQfxam5kqJReV7HVhammGvhg68bMJ417NF2yXkz8baT-AiCLa7L-PTbxgAvo2XW69U8fvOnTebp82hDyLRlZqHuv27Q6NwGoDUpnUBT1xfKmmavOfYPb0o8u6eEfWfWUeoLE7GP2ywB-fMVnCA85mfY8ulmo_GzOe26NVlcgE5xq9mU5QTT2I")`,
          x: backgroundX,
          y: backgroundY
        }}
      />
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto flex h-full flex-col items-start justify-center px-6 text-left">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter text-split-title"
          >
            <span className="block split-line">
              Turnkey HVAC &
            </span>
            <span className="block split-line">
              Cleanroom Solutions
            </span>
            <span className="block text-orange-400 split-line">
              for Industrial Excellence
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 max-w-2xl text-lg md:text-xl text-slate-200 text-split-subtitle"
          >
            From Design to Installation - Complete Solutions for Pharmaceuticals, Manufacturing & Beyond.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button 
              className="flex min-w-[200px] items-center justify-center rounded-md h-12 px-6 bg-orange-600 text-white hover:bg-orange-700 transition-all duration-150 text-base font-bold"
              whileHover={{ 
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => lenisScrollTo('#contact', 80, 1.5)}
            >
              <span className="truncate">Get Free Consultation</span>
            </motion.button>
            
            <motion.button 
              className="flex min-w-[200px] items-center justify-center rounded-md h-12 px-6 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-150 text-base font-bold border border-white/30"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => lenisScrollTo('#projects', 80, 1.5)}
            >
              <span className="truncate">View Our Projects</span>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Animated Stats Section at Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={statItemVariants}>
              <motion.p 
                className="font-bold text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
              >
                15+ Years
              </motion.p>
              <p className="text-sm text-slate-300">Experience</p>
            </motion.div>
            <motion.div variants={statItemVariants}>
              <motion.p 
                className="font-bold text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
              >
                500+
              </motion.p>
              <p className="text-sm text-slate-300">Projects Completed</p>
            </motion.div>
            <motion.div variants={statItemVariants}>
              <motion.p 
                className="font-bold text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6, type: "spring" }}
              >
                ISO Certified
              </motion.p>
              <p className="text-sm text-slate-300">Quality Assured</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
"use client"; // Add this directive for hooks like useState, useRef, useScroll

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Import hooks

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef(null); // Ref for the section

  // Hook for scroll progress within the target element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"] // Track scroll from start of element to end of element relative to viewport start
  });

  // Transform scroll progress (0 to 1) into a translateY value for parallax
  // Move the background slower than the scroll speed
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); 
  // Optional: Fade out the background as it scrolls up
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const taglineStyle = {
    color: isHovering ? '#3b82f6' : '#f3f4f6', // Adjusted default color for better contrast on image
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer'
  };

  return (
    // Add ref to the section for scroll tracking
    <section 
      ref={targetRef} 
      className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-20 md:py-32 text-center relative overflow-hidden h-[80vh] md:h-[90vh] flex flex-col justify-center"
    >
      {/* Parallax Background Element */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        // Placeholder background image - replace with a city skyline or abstract image
        style={{
          backgroundImage: "url('/images/placeholder-city-background.jpg')", 
          y: backgroundY, // Apply parallax effect
          opacity: backgroundOpacity // Apply fade effect
        }}
      />
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div> {/* Slightly increased opacity */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" // Enhanced drop shadow
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Books.shyamnagar
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-100 font-semibold drop-shadow-md"
          style={taglineStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discount beyond your expectations.
        </motion.p>
      </div>
      {/* Simple scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-6 h-6 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;


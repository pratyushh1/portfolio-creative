'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CinematicCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  // Initialize off-screen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 🎥 Cinematic Physics (Heavy, Fluid)
  const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Dot Physics (Snappy)
  const dotConfig = { damping: 35, stiffness: 400, mass: 0.2 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Intelligently detect hoverable elements
      const hoverElement = target.closest('a, button, [data-cursor], input, textarea, .cursor-hover');
      
      if (hoverElement) {
        setIsHovering(true);
        // Extract custom text data attribute if available
        const customText = hoverElement.getAttribute('data-cursor');
        setCursorText(customText || ''); // Default empty implies 'VIEW' or just shape change
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. Precision Dot (Disappears on hover) */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: isHovering ? 0 : 1,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 1)', // Intense core glow
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 2. Magnetic Follower (Transforms into View Lens) */}
      <motion.div
        className="hidden lg:flex fixed top-0 left-0 rounded-full pointer-events-none z-[9998] mix-blend-difference items-center justify-center overflow-hidden"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovering ? (cursorText ? 120 : 60) : 24,
          height: isHovering ? (cursorText ? 120 : 60) : 24,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          border: isHovering ? 'none' : '1.5px solid rgba(255, 255, 255, 0.8)',
          boxShadow: isHovering 
            ? '0 0 60px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)' 
            : '0 0 25px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)', // Complex multi-layer cinematic glow
          translateX: '-50%',
          translateY: '-50%',
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5
        }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="text-black text-[11px] font-bold tracking-[0.25em] font-display uppercase flex items-center justify-center gap-2"
            >
             {cursorText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

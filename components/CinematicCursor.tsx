'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CinematicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button, a, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
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
  }, []);

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.4 : isClicking ? 0.8 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.4,
        }}
      >
        <div className="w-12 h-12 rounded-full border border-slate-400/40 blur-sm" />
      </motion.div>

      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : isClicking ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 280,
          mass: 0.35,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-slate-300/60 
                       shadow-[0_0_15px_rgba(148,163,184,0.3)]" />
      </motion.div>
      
      {/* Center dot with glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 
                       shadow-[0_0_10px_rgba(226,232,240,0.8)]" />
      </motion.div>

      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 rounded-full bg-slate-400/40 pointer-events-none z-[9998] blur-[0.5px]"
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{
            type: 'spring',
            damping: 15 - i * 3,
            stiffness: 120 - i * 20,
            mass: 0.3 + i * 0.15,
          }}
        />
      ))}
    </>
  );
}

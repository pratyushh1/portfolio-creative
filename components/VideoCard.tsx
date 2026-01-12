'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface VideoCardProps {
  title: string;
  client: string;
  thumbnail: string;
  videoUrl?: string;
  category: string;
  index: number;
}

export default function VideoCard({
  title,
  client,
  thumbnail,
  videoUrl,
  category,
  index,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
    >
      {/* Card container with glass effect */}
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateY: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[9/16] glass-card overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Thumbnail/Video */}
        <div className="absolute inset-0 bg-dark-lighter">
          {isHovered && videoUrl ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
              <span className="text-white/40 text-sm">Video Preview</span>
            </div>
          )}
        </div>

        {/* Hover overlay with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 30,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs font-semibold text-accent-cyan mb-2 uppercase tracking-wider">
              {category}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/70 text-sm">{client}</p>
          </motion.div>
        </div>

        {/* Dramatic glow effect on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute -inset-2 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-30 blur-2xl -z-10"
        />

        {/* Scan line effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

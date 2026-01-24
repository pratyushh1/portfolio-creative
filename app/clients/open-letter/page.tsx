'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';
import VideoCard from '@/components/VideoCard';
import { projects } from '@/lib/projects';
import Link from 'next/link';

export default function OpenLetterPage() {
  const openLetterProjects = projects.filter((p) => p.client === 'Open Letter');

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Client header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 md:p-10 lg:p-12 rounded-xl md:rounded-2xl mb-12 md:mb-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/work"
                  className="text-white/60 hover:text-white transition-colors text-sm mb-4 inline-block"
                >
                  ← Back to Work
                </Link>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                <span className="text-gradient">Open Letter</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
                Crafting premium, story-driven content that resonates with audiences.
                Focusing on authentic storytelling with cinematic quality.
              </p>
            </div>
          </motion.div>

          {/* Project focus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              {
                label: 'Content Type',
                value: 'Brand Stories & Insights',
              },
              {
                label: 'Focus',
                value: 'Emotional Storytelling',
              },
              {
                label: 'Avg. Retention',
                value: '94%+',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <p className="text-white/50 text-sm mb-2">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Projects grid */}
          <SectionHeader title="Projects" subtitle="Latest work for Open Letter" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {openLetterProjects.map((project, index) => (
              <VideoCard
                key={project.id}
                title={project.title}
                client={project.client}
                thumbnail={project.thumbnail}
                videoUrl={project.videoUrl}
                category={project.category}
                index={index}
              />
            ))}
          </div>

          {/* Project details section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 glass-card p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Editing Approach</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Narrative Focus:</strong> Building emotional
                connections through thoughtful pacing, carefully timed reveals, and authentic
                moments that resonate with viewers.
              </p>
              <p>
                <strong className="text-white">Visual Quality:</strong> Premium color grading,
                smooth transitions, and cinematic framing that elevates brand storytelling.
              </p>
              <p>
                <strong className="text-white">Audio Design:</strong> Strategic use of music,
                sound design, and silence to enhance emotional impact and guide viewer experience.
              </p>
              <p>
                <strong className="text-white">Tools Used:</strong> Premiere Pro, After Effects,
                DaVinci Resolve, Audition
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

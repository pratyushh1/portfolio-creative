'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';

export default function AboutPage() {
  const skills = [
    'Premiere Pro',
    'After Effects',
    'DaVinci Resolve',
    'CapCut',
    'Final Cut Pro',
    'Audition',
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Total Views', value: '100M+' },
    { label: 'Years Experience', value: '6+' },
    { label: 'Major Clients', value: '10+' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="About"
            subtitle="The story behind the edits"
            align="center"
          />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-12 rounded-2xl mb-12"
          >
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                I'm a <strong className="text-white">professional video editor</strong> with over 
                6 years of experience crafting compelling visual stories for major brands and creators.
              </p>
              <p>
                My expertise spans across multiple formats—from high-energy social content to 
                cinematic brand narratives. I've worked with leading creators like{' '}
                <strong className="text-white">Tech Burner</strong> and{' '}
                <strong className="text-white">Open Letter</strong>, delivering edits that don't 
                just get views—they create impact.
              </p>
              <p>
                Whether it's fast-paced product reviews, emotional brand stories, or viral social content,
                I bring the same dedication to craft and attention to detail to every project.
              </p>
              <p>
                My approach combines technical precision with creative storytelling, strategic pacing 
                with platform-specific optimization, ensuring every frame serves the story and every 
                cut drives the narrative forward.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-2xl mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-gradient">My Philosophy</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">🎯 Strategic Approach</h3>
                <p className="text-white/60 leading-relaxed">
                  Every project gets a tailored strategy—understanding your goals, audience, 
                  and platform to deliver edits that perform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">⚡ Technical Excellence</h3>
                <p className="text-white/60 leading-relaxed">
                  Advanced editing techniques, precise color grading, and polished audio design 
                  that elevates production value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">🎬 Visual Storytelling</h3>
                <p className="text-white/60 leading-relaxed">
                  Crafting narratives through strategic cuts, pacing, and visual flow that 
                  keeps audiences engaged from start to finish.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">✨ Consistent Quality</h3>
                <p className="text-white/60 leading-relaxed">
                  Reliable turnaround times and professional communication, backed by 6+ years 
                  of experience working with top-tier clients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Tools I Use</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="glass-card px-6 py-3 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
  const skills = [
    'Premiere Pro',
    'After Effects',
    'Final Cut Pro',
    'Audition',
    'Blender',
    'Photoshop',
    'Pixelmator',
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-8">ABOUT</h1>
            <div className="h-px w-20 bg-white mb-12"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-8">Who I Am</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  23. Hyderabad, India. Six years deep into turning raw footage into content that people actually watch. 
                  Started young, stayed hungry, and learned that attention spans are earned, not given.
                </p>
                <p>
                  I've edited for <span className="text-white font-semibold">Tech Burner</span>, <span className="text-white font-semibold">BeerBiceps</span>, and{' '}
                  <span className="text-white font-semibold">Open Letter</span>, helping their content reach millions. 
                  The secret? Understanding that every frame either keeps people watching or gives them permission to leave.
                </p>
                <p>
                  Beyond the timeline, I shoot photos that tell stories and build brands that look sharper than their competition. 
                  Whether it's motion, stillness, or design, the approach stays the same: intentional choices, technical precision, 
                  and zero tolerance for mediocrity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-8">What I Do</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Video Editing',
                    desc: 'High-energy shorts, reels, and long-form content with maximum retention'
                  },
                  {
                    title: 'Photography',
                    desc: 'Portraits, products, events, and architectural photography'
                  },
                  {
                    title: 'Graphic Design',
                    desc: 'Branding, posters, social media, UI/UX, and visual identities'
                  },
                  {
                    title: 'Brand Content',
                    desc: 'Premium storytelling for brands across all visual mediums'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="border-l-2 border-white/20 pl-6"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/10 pt-20 mb-32"
          >
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { number: '6+', label: 'Years' },
                { number: '500+', label: 'Projects' },
                { number: '100M+', label: 'Views' },
                { number: '10+', label: 'Major Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold mb-4">{stat.number}</div>
                  <div className="text-white/60 uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/10 pt-20"
          >
            <h2 className="text-4xl font-bold mb-12">Assists By</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

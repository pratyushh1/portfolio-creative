"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useRef } from "react";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "Tech Burner",
    logo: "/clients/tech-burner.jpg",
    description: "Spent 3 glorious months turning tech unboxings into dopamine-inducing visual chaos. From explosive product reveals to rapid-fire reviews, I edited content that made millions of viewers feel things about smartphones they didn't even know existed. My secret? Cuts faster than the average attention span and graphics shinier than the gadgets themselves. Long-form deep dives, short-form adrenaline shots—delivered with the precision of a perfectly timed jump cut.",
    alignment: "left",
    youtubeUrl: "https://www.youtube.com/@TechBurner",
    youtubeLine: "Watch the chaos unfold",
  },
  {
    id: 2,
    name: "BeerBiceps",
    logo: "/clients/beerbiceps.jpg",
    description: "Would you rather scroll past mediocre content or stop dead for hooks that hit like a perfectly timed punchline? Spent months crafting short-form content with an elite talent for grabbing attention .. every frame a winner. Mastered the art of the 3-second hook: bold, unapologetic, and engineered to make thumbs freeze mid-scroll. From explosive opens to cliffhanger cuts, I turned everyday moments into viral ammunition. Because in the attention economy, you either hook them or you're invisible.",
    alignment: "left",
    youtubeUrl: "https://www.youtube.com/@beerbiceps/shorts",
    youtubeLine: "See hooks that actually hook",
  },
  {
    id: 3,
    name: "Open Letter",
    logo: "/clients/open-letter.jpg",
    description: "Dedicated 3 months to crafting stories that hit different. While others were chasing trends, I was building narrative arcs that actually made people feel something beyond the urge to scroll. Documentary-style edits with cinematic color grading that would make Spielberg nod respectfully. Every frame paced like poetry, every sound designed to pierce through the noise. Because real storytelling doesn't need clickbait .. it just needs someone who knows when to hold a shot and when to let it breathe.",
    alignment: "left",
    youtubeUrl: "https://www.youtube.com/@openletteryt",
    youtubeLine: "Experience stories that breathe",
  },
];

export default function VideoEditingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen bg-black text-white">
        {/* Hero Section with Parallax */}
        <motion.section
          style={{ y, opacity }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Animated Film Strip Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="flex h-full gap-4">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: i % 2 === 0 ? [0, -50, 0] : [0, 50, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex-shrink-0 w-2 bg-white"
                />
              ))}
            </div>
          </div>

          {/* Floating Play Button */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-24 h-24 border border-white/20"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -90, -180],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"
          />

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-white/60 tracking-[0.3em] text-sm uppercase">
                Video Editing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold tracking-tight mb-6"
            >
              MOTION
              <br />
              STORYTELLING
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
            >
              Turning raw footage into dopamine hits, one cut at a time.
              <br />
              Millions of views, maximum retention, zero boring moments.
            </motion.p>
          </div>
        </motion.section>

        {/* Clients Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">Client Work</h2>
              <p className="text-xl text-white/70">Trusted by top creators for high-quality content</p>
            </motion.div>

            <div className="space-y-12">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                >
                  <div className={`flex flex-col items-center gap-8 ${
                    client.alignment === "right" 
                      ? "md:flex-row-reverse" 
                      : "md:flex-row"
                  }`}>
                    {/* Client Logo */}
                    <div className="w-40 h-40 flex-shrink-0 relative rounded-xl overflow-hidden bg-white/10">
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>

                    {/* Client Info */}
                    <div className={`flex-1 text-center ${
                      client.alignment === "right" 
                        ? "md:text-right" 
                        : "md:text-left"
                    }`}>
                      <h3 className="text-3xl font-bold mb-6">{client.name}</h3>
                      <p className="text-lg text-white/70 leading-relaxed mb-6">
                        {client.description}
                      </p>
                      <motion.a
                        href={client.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all text-sm font-medium"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        {client.youtubeLine}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-2xl text-white/50 italic">...and more 'real' creators.</p>
            </motion.div>
          </div>
        </section>



        {/* Certification Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">Certified Editor</h2>
              <p className="text-xl text-white/70">Recognized for professional editing excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-12 max-w-3xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo */}
                <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/certificates/aevy-tv-logo.png"
                    alt="Aevy TV Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-3">Aevy TV</h3>
                  <p className="text-xl text-white/70 mb-6">Certified Video Editor</p>
                  <motion.a
                    href="/certificates/aevy-tv-certificate.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    View Certificate
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Portfolio Drive Link Section */}
        <section className="py-32 px-6 bg-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Full Video Portfolio
            </h2>
            <p className="text-xl text-white/70 mb-6">
              I'd love to embed 100+ videos here, but my website would crash harder than a corrupted timeline.
            </p>
            <p className="text-lg text-white/50 mb-12">
              So here's a Google Drive link instead. Less cinematic, but your browser will thank me.
            </p>
            <motion.a
              href="https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.5l-6 3.75-6-3.75v-9l6-3.75 6 3.75v9z"/>
              </svg>
              View Full Portfolio on Google Drive
            </motion.a>
          </motion.div>
        </section>

        {/* Editing Process Section */}
        <section className="py-32 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">Editing Process</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Every frame is crafted to hook, engage, and retain viewers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Analysis",
                  description: "Understanding the content, audience, and platform requirements",
                  icon: "🎯",
                },
                {
                  number: "02",
                  title: "Assembly",
                  description: "Cutting the best moments and creating narrative flow",
                  icon: "✂️",
                },
                {
                  number: "03",
                  title: "Enhancement",
                  description: "Color grading, effects, motion graphics, and sound design",
                  icon: "✨",
                },
                {
                  number: "04",
                  title: "Optimization",
                  description: "Pacing adjustments for maximum retention and impact",
                  icon: "⚡",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-6xl font-bold text-white/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Videos Edited" },
                { number: "10M+", label: "Total Views" },
                { number: "80%+", label: "Avg Retention" },
                { number: "6+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-7xl font-bold mb-3">
                    {stat.number}
                  </div>
                  <div className="text-white/60 tracking-wide uppercase text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Create Viral Content?
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Let's craft videos that captivate and convert
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}

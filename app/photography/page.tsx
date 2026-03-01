"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

interface Photo {
  id: number;
  image: string;
}

interface SharonPhoto {
  id: number;
  image: string;
  type: "portrait" | "show" | "other";
}

interface ImageDimensions {
  width: number;
  height: number;
  ratio: number; // height / width
}

// Static photo list - no API call needed
const photos: Photo[] = [
  { id: 1, image: "/photos/1.jpg" },
  { id: 2, image: "/photos/1_1.jpg" },
  { id: 3, image: "/photos/2.jpg" },
  { id: 4, image: "/photos/3.jpg" },
  { id: 5, image: "/photos/4.jpg" },
  { id: 6, image: "/photos/5.jpg" },
  { id: 7, image: "/photos/6.jpg" },
  { id: 8, image: "/photos/6_1.jpg" },
  { id: 9, image: "/photos/7.jpg" },
  { id: 10, image: "/photos/8.jpg" },
  { id: 11, image: "/photos/9.jpg" },
  { id: 12, image: "/photos/9_1.jpg" },
  { id: 13, image: "/photos/10.jpg" },
  { id: 14, image: "/photos/11.jpg" },
  { id: 15, image: "/photos/11_1.jpg" },
  { id: 16, image: "/photos/12.jpg" },
  { id: 17, image: "/photos/12_1.jpg" },
  { id: 18, image: "/photos/13.jpg" },
  { id: 19, image: "/photos/14.jpg" },
  { id: 20, image: "/photos/15.jpg" },
  { id: 21, image: "/photos/16.jpg" },
  { id: 22, image: "/photos/17.jpg" },
  { id: 23, image: "/photos/18.jpg" },
  { id: 24, image: "/photos/19.jpg" },
  { id: 25, image: "/photos/20.jpg" },
  { id: 26, image: "/photos/21.jpg" },
];

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [sharonPhotos, setSharonPhotos] = useState<SharonPhoto[]>([]);
  const [sharonFilter, setSharonFilter] = useState<"all" | "portrait" | "show">("all");
  const [sharonLoading, setSharonLoading] = useState(true);
  const [sharonImagesReady, setSharonImagesReady] = useState(false);
  const [imageDims, setImageDims] = useState<Record<string, ImageDimensions>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Fetch Sharon Verma photos from API — cached in sessionStorage
  useEffect(() => {
    const cached = sessionStorage.getItem("sharon-photos");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSharonPhotos(parsed);
          setSharonLoading(false);
          return;
        }
      } catch {}
    }
    fetch("/api/photos/sharon-verma")
      .then((res) => res.json())
      .then((data: SharonPhoto[]) => {
        if (Array.isArray(data)) {
          setSharonPhotos(data);
          sessionStorage.setItem("sharon-photos", JSON.stringify(data));
        }
      })
      .catch(() => {})
      .finally(() => setSharonLoading(false));
  }, []);

  const filteredSharonPhotos = useMemo(
    () =>
      sharonFilter === "all"
        ? sharonPhotos
        : sharonPhotos.filter((p) => p.type === sharonFilter),
    [sharonPhotos, sharonFilter]
  );

  // Mark an image as loaded for fade-in — no longer needed, replaced with bulk preload

  // Distribute photos into manual columns for zero-reflow masonry
  const sharonColumns = useMemo(() => {
    if (!sharonImagesReady || filteredSharonPhotos.length === 0) return [];
    // Use 3 columns on lg, but we render both 2-col and 3-col and hide via CSS
    const makeCols = (numCols: number) => {
      const cols: SharonPhoto[][] = Array.from({ length: numCols }, () => []);
      const heights = new Array(numCols).fill(0);
      filteredSharonPhotos.forEach((photo) => {
        // Find shortest column
        const shortest = heights.indexOf(Math.min(...heights));
        cols[shortest].push(photo);
        const dim = imageDims[photo.image];
        heights[shortest] += dim ? dim.ratio : 1;
      });
      return cols;
    };
    return makeCols(3); // We'll use 2 cols on mobile via CSS grid
  }, [sharonImagesReady, filteredSharonPhotos, imageDims]);

  const sharonColumns2 = useMemo(() => {
    if (!sharonImagesReady || filteredSharonPhotos.length === 0) return [];
    const cols: SharonPhoto[][] = [[], []];
    const heights = [0, 0];
    filteredSharonPhotos.forEach((photo) => {
      const shortest = heights.indexOf(Math.min(...heights));
      cols[shortest].push(photo);
      const dim = imageDims[photo.image];
      heights[shortest] += dim ? dim.ratio : 1;
    });
    return cols;
  }, [sharonImagesReady, filteredSharonPhotos, imageDims]);

  // Preload ALL sharon images in background, capture dimensions, flip ready flag
  useEffect(() => {
    if (sharonPhotos.length === 0) return;
    let cancelled = false;
    const dims: Record<string, ImageDimensions> = {};
    const promises = sharonPhotos.map(
      (photo) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            dims[photo.image] = {
              width: img.naturalWidth,
              height: img.naturalHeight,
              ratio: img.naturalHeight / img.naturalWidth,
            };
            resolve();
          };
          img.onerror = () => {
            dims[photo.image] = { width: 1, height: 1, ratio: 1 };
            resolve();
          };
          img.src = photo.image;
        })
    );
    Promise.all(promises).then(() => {
      if (!cancelled) {
        setImageDims(dims);
        setSharonImagesReady(true);
      }
    });
    return () => { cancelled = true; };
  }, [sharonPhotos]);

  // Build a unified photo list for lightbox navigation
  const allLightboxPhotos: string[] = [
    ...filteredSharonPhotos.map((p) => p.image),
    ...photos.map((p) => p.image),
  ];

  const selectedIndex = selectedPhoto
    ? allLightboxPhotos.indexOf(selectedPhoto)
    : -1;

  const goToPhoto = useCallback(
    (direction: "prev" | "next") => {
      if (selectedIndex === -1) return;
      const nextIndex =
        direction === "prev" ? selectedIndex - 1 : selectedIndex + 1;
      if (nextIndex >= 0 && nextIndex < allLightboxPhotos.length) {
        setSelectedPhoto(allLightboxPhotos[nextIndex]);
      }
    },
    [selectedIndex, allLightboxPhotos]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") goToPhoto("prev");
      if (e.key === "ArrowRight") goToPhoto("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedPhoto, goToPhoto]);

  // Preload all static photos immediately on mount
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo.image;
    });
  }, []);

  // Preload Sharon photos once loaded from API
  // (handled by the bulk preload effect above)

  const filteredPhotos = photos;

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen bg-black text-white">
        {/* Hero Section with Parallax */}
        <motion.section
          style={{ y, opacity }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Static decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "400px",
                  height: "2px",
                  background: "white",
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>

          {/* Static Camera Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full" />
          <div 
            className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-white/10"
            style={{ borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%" }}
          />

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-4 md:mb-6"
            >
              <span className="text-white/60 tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase">
                Photography
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4 md:mb-6"
            >
              FROZEN
              <br />
              MOMENTS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto px-4"
            >
              Moments frozen better than your phone camera ever could.
              <br className="hidden sm:block" />
              Scroll through, connect with what moves you, and let's create magic together.
            </motion.p>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════
            ★ FEATURED SHOOT — SHARON VERMA ★
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 overflow-hidden">
          {/* Ambient gold glow background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Featured Badge + Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-amber-400/40 bg-amber-500/10 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  Featured Shoot
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent">
                  Sharon Verma
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed px-2">
                Portraits &amp; live show coverage for one of India&apos;s rising standup comedians.
                <br className="hidden sm:block" />
                Capturing the energy on stage and the person behind the punchlines.
              </p>

              {/* Filter Tabs */}
              {sharonPhotos.length > 0 && (
                <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
                  {(
                    [
                      { key: "all", label: "All" },
                      { key: "portrait", label: "Portraits" },
                      { key: "show", label: "The Show" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setSharonFilter(tab.key)}
                      className={`
                        px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300
                        ${
                          sharonFilter === tab.key
                            ? "bg-amber-400/20 text-amber-200 border border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.15)]"
                            : "text-white/50 border border-white/10 hover:border-white/30 hover:text-white/80"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Photo Grid — JS-computed masonry, zero CSS columns reflow */}
            {(sharonLoading || (!sharonImagesReady && sharonPhotos.length > 0)) ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`bg-white/5 rounded-xl animate-pulse ${
                      i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  />
                ))}
              </div>
            ) : sharonPhotos.length > 0 ? (
              <>
                {/* 2-column layout for mobile */}
                <div className="grid grid-cols-2 gap-3 md:gap-5 lg:hidden">
                  {sharonColumns2.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-3 md:gap-5">
                      {col.map((photo) => {
                        const dim = imageDims[photo.image];
                        return (
                          <button
                            key={photo.id}
                            onClick={() => setSelectedPhoto(photo.image)}
                            className="group relative w-full rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/30 transition-colors duration-200 block"
                            style={{ aspectRatio: dim ? `${dim.width} / ${dim.height}` : undefined }}
                          >
                            <img
                              src={photo.image}
                              alt={`Sharon Verma — ${photo.type}`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3 sm:p-4 z-10">
                              <div>
                                <span className="inline-block px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 mb-1">
                                  {photo.type === "portrait" ? "Portrait" : photo.type === "show" ? "Live Show" : "Behind the Scenes"}
                                </span>
                              </div>
                            </div>
                            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[inset_0_0_30px_rgba(251,191,36,0.08)] z-10" />
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
                {/* 3-column layout for desktop */}
                <div className="hidden lg:grid grid-cols-3 gap-5">
                  {sharonColumns.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-5">
                      {col.map((photo) => {
                        const dim = imageDims[photo.image];
                        return (
                          <button
                            key={photo.id}
                            onClick={() => setSelectedPhoto(photo.image)}
                            className="group relative w-full rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/30 transition-colors duration-200 block"
                            style={{ aspectRatio: dim ? `${dim.width} / ${dim.height}` : undefined }}
                          >
                            <img
                              src={photo.image}
                              alt={`Sharon Verma — ${photo.type}`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3 sm:p-4 z-10">
                              <div>
                                <span className="inline-block px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 mb-1">
                                  {photo.type === "portrait" ? "Portrait" : photo.type === "show" ? "Live Show" : "Behind the Scenes"}
                                </span>
                              </div>
                            </div>
                            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[inset_0_0_30px_rgba(251,191,36,0.08)] z-10" />
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 md:py-24 border border-dashed border-white/20 rounded-2xl"
              >
                <div className="text-5xl md:text-6xl mb-4">📸</div>
                <p className="text-white/40 text-sm md:text-base">
                  Photos coming soon — drop images into{" "}
                  <code className="text-amber-300/70 bg-white/5 px-2 py-0.5 rounded text-xs">
                    public/photos/sharon-verma/
                  </code>
                </p>
                <p className="text-white/30 text-xs mt-2">
                  Name files <code className="text-white/50">portrait-1.jpg</code>, <code className="text-white/50">show-1.jpg</code>, etc.
                </p>
              </motion.div>
            )}
          </div>

          {/* Bottom gold separator line */}
          <div className="max-w-7xl mx-auto mt-16 md:mt-24">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
          </div>
        </section>

        {/* Other Work Header */}
        <section className="pt-8 md:pt-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">More Work</h2>
              <p className="text-sm md:text-base text-white/50">A broader look at my photography</p>
            </motion.div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredPhotos.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "200px" }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSelectedPhoto(photo.image)}
                  className="group relative aspect-[4/5] bg-zinc-900 border border-white/10 rounded-lg overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={photo.image}
                    alt={`Photo ${photo.id}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                    fetchPriority={index < 6 ? "high" : "auto"}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-white text-sm uppercase tracking-wider">
                      Click to View
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Approach Section */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Photography Approach</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Every shot is crafted with intention, light, and storytelling
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Vision",
                  description: "Understanding the story, mood, and desired emotion",
                  icon: "👁️",
                },
                {
                  number: "02",
                  title: "Composition",
                  description: "Framing, perspective, and visual balance",
                  icon: "📐",
                },
                {
                  number: "03",
                  title: "Light",
                  description: "Natural or artificial lighting to set the mood",
                  icon: "💡",
                },
                {
                  number: "04",
                  title: "Post-Process",
                  description: "Color grading and retouching for final perfection",
                  icon: "🎨",
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

        {/* Specializations */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">What I Shoot</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Portraits",
                  description:
                    "Personal, corporate, and editorial portrait sessions that capture personality and character",
                  icon: "👤",
                },
                {
                  title: "Products",
                  description:
                    "Commercial product photography for e-commerce, catalogs, and marketing materials",
                  icon: "📦",
                },
                {
                  title: "Events",
                  description:
                    "Corporate events, conferences, weddings, and special occasions documented beautifully",
                  icon: "🎉",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
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
              Let's Create Stunning Visuals
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Book a photography session or discuss your project
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-pointer"
          >
            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPhoto("prev");
              }}
              disabled={selectedIndex <= 0}
              className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPhoto("next");
              }}
              disabled={selectedIndex >= allLightboxPhotos.length - 1}
              className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Full Image */}
            <motion.div
              key={selectedPhoto}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full h-full cursor-default flex items-center justify-center"
            >
              <img
                src={selectedPhoto}
                alt="Full size photo"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain mx-auto rounded-lg"
              />
              {/* Preload adjacent images for instant navigation */}
              {selectedIndex > 0 && (
                <link rel="prefetch" href={allLightboxPhotos[selectedIndex - 1]} as="image" />
              )}
              {selectedIndex < allLightboxPhotos.length - 1 && (
                <link rel="prefetch" href={allLightboxPhotos[selectedIndex + 1]} as="image" />
              )}
            </motion.div>

            {/* Photo Counter & Go Back Button */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm">
                {selectedIndex + 1} / {allLightboxPhotos.length}
              </div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setSelectedPhoto(null)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all shadow-2xl"
              >
                Go Back
              </motion.button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}

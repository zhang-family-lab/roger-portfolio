"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

// Generate 18 placeholder artworks
// NOTE: Ensure you have files named art0.jpg, art1.jpg ... art17.jpg in public/images/arts/
const artworks = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Artwork ${i + 1}`,
    type: i % 3 === 0 ? "Painting" : i % 3 === 1 ? "Photography" : "Digital Art",
    src: `/images/arts/art${i}.jpg`,
}));

export default function ArtsGallery() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);

    const showMore = () => {
        setVisibleCount((prev) => Math.min(prev + 6, artworks.length));
    };

    return (
        <section id="arts" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Creative Portfolio
                    </h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                        Visual Arts
                    </h3>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                        Exploring the world through canvas and lens. A collection of my selected works.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {artworks.slice(0, visibleCount).map((art, index) => (
                        <motion.div
                            layout
                            key={art.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
                            onClick={() => setSelectedArt(art)}
                        >
                            <div className="relative w-full">
                                <Image
                                    src={art.src}
                                    alt={art.title}
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-white font-bold text-lg">{art.title}</h4>
                                        <p className="text-slate-300 text-sm">{art.type}</p>
                                        <div className="mt-2 flex items-center text-white/80 text-xs uppercase tracking-wider font-medium">
                                            <ZoomIn className="w-4 h-4 mr-1" /> View Full
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {visibleCount < artworks.length && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={showMore}
                            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Load More Works
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedArt && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedArt(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setSelectedArt(null)}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10 transition-colors"
                        >
                            <X className="w-10 h-10" />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                             <Image
                                src={selectedArt.src}
                                alt={selectedArt.title}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white rounded-b-lg pointer-events-none">
                                <h3 className="text-2xl font-bold">{selectedArt.title}</h3>
                                <p className="text-slate-300 text-lg">{selectedArt.type}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

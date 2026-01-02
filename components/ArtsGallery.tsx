"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const artworks = [
    { id: 1, title: "Abstract Melody", type: "Painting", height: "h-64", src: "https://placehold.co/600x400/blue/white?text=Art+1" },
    { id: 2, title: "Urban Solitude", type: "Photography", height: "h-96", src: "https://placehold.co/600x800/2a2a2a/white?text=Photo+1" },
    { id: 3, title: "Nature's Pattern", type: "Photography", height: "h-72", src: "https://placehold.co/600x500/green/white?text=Photo+2" },
    { id: 4, title: "Geometric Study", type: "Painting", height: "h-80", src: "https://placehold.co/600x700/orange/white?text=Art+2" },
    { id: 5, title: "Portrait in Blue", type: "Painting", height: "h-64", src: "https://placehold.co/600x400/indigo/white?text=Art+3" },
    { id: 6, title: "Light & Shadow", type: "Photography", height: "h-72", src: "https://placehold.co/600x500/black/white?text=Photo+3" },
];

export default function ArtsGallery() {
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
                    {artworks.map((art, index) => (
                        <motion.div
                            key={art.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                            <div className="relative w-full">
                                <Image
                                    src={art.src}
                                    alt={art.title}
                                    width={600}
                                    height={800} // Aspect ratio is handled by height class or natural image size
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h4 className="text-white font-bold text-lg">{art.title}</h4>
                                    <p className="text-slate-300 text-sm">{art.type}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

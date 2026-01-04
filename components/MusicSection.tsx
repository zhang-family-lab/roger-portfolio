"use client";

import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";

export default function MusicSection() {
    return (
        <section id="music" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                            Piano & Music
                        </h2>
                        <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Piano Performance
                        </h3>
                        <p className="text-lg text-slate-600 mb-6">
                            Classical piano has been a cornerstone of my discipline and creative expression. Achieving <span className="font-bold text-slate-900">Level 10 with Honors</span> in the Certificate of Merit (CM) reflects years of technical study and artistic growth.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                <p className="font-medium text-slate-900">Certificate of Merit (CM) - Level 10 Honors</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                <p className="font-medium text-slate-900">Classical Repertoire Focus</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Player UI / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-3 transform"></div>
                        <div className="relative bg-white border border-slate-100 p-2 rounded-3xl shadow-2xl">
                            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/videoseries?list=PLzUh85PtcO4kREsV6rCvv9DEas-aDo196"
                                    title="Piano Performance Playlist"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

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
                            Musical Journey
                        </h2>
                        <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Principal Cellist
                        </h3>
                        <p className="text-lg text-slate-600 mb-6">
                            Music has been my companion for over a decade. As the Principal Cellist of the school orchestra, I find discipline and expression in every bow stroke.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                <p className="font-medium text-slate-900">California Youth Symphony (Associate)</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                <p className="font-medium text-slate-900">CM Level 10 - Honors</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                <p className="font-medium text-slate-900">Upcoming Performance: Winter Gala, Dec 15</p>
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
                        <div className="relative bg-white border border-slate-100 p-8 rounded-3xl shadow-2xl">
                            <div className="aspect-square w-full bg-slate-100 rounded-2xl mb-8 relative overflow-hidden">
                                <Image
                                    src="https://placehold.co/500x500/1e293b/white?text=Cello+Performance"
                                    alt="Cello Performance"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900">Elgar Cello Concerto in E Minor</h4>
                                    <p className="text-slate-500">Live Recording - 2025</p>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-2">
                                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-1/3 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                                        <span>2:15</span>
                                        <span>7:30</span>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex justify-between items-center">
                                    <button className="text-slate-400 hover:text-slate-600">
                                        <Volume2 className="w-5 h-5" />
                                    </button>
                                    <div className="flex items-center gap-6">
                                        <button className="text-slate-400 hover:text-slate-900">
                                            <SkipBack className="w-6 h-6" />
                                        </button>
                                        <button className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 active:scale-95">
                                            <Play className="w-6 h-6 ml-1" />
                                        </button>
                                        <button className="text-slate-400 hover:text-slate-900">
                                            <SkipForward className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <div className="w-5" /> {/* Spacer for balance */}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

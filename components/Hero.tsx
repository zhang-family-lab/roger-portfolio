"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                                Class of 2027 | GPA 3.8/4.2
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                                Athlete, Artist, <br />
                                <span className="text-blue-600">& Community Leader.</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-lg">
                                Hi, I'm Roger Zhang. A student-scholar at Archbishop Mitty HS, dedicated to excellence on the field, on the canvas, and in my community.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/resume.pdf"
                                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-transform active:scale-95 shadow-lg shadow-slate-900/20"
                            >
                                <Download className="mr-2 h-5 w-5" />
                                Download Resume
                            </a>
                            <a
                                href="#soccer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 hover:border-blue-200 transition-all active:scale-95"
                            >
                                Watch Highlights
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
                            <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-3 opacity-5"></div>
                            <div className="relative h-full w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Placeholder for Headshot */}
                                <Image
                                    src="https://placehold.co/800x1000/e2e8f0/1e293b?text=Roger+Zhang"
                                    alt="Roger Zhang Headshot"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                        #41
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-semibold uppercase">Midfield</p>
                                        <p className="text-slate-900 font-bold">Bay Area Surf</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

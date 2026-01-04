"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Microscope, ArrowUpRight } from "lucide-react";

export default function Academics() {
    return (
        <section id="academics" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Intellectual Curiosity
                    </h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                        Academic Interests & Research
                    </h3>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        Beyond the classroom, I explore the intersection of technology, history, and social impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Research / Writing */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">History Research Paper</h4>
                        <p className="text-slate-600 mb-4">
                            "The Economic Impact of the Silk Road on Modern Trade Policies." Analyzed primary sources to draw parallels between ancient trade routes and the Belt and Road Initiative.
                        </p>
                        <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                            Read Abstract <ArrowUpRight className="w-4 h-4 ml-1" />
                        </a>
                    </motion.div>

                    {/* Card 2: STEM / Coding */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                    >
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                            <Code className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Applied Computer Science</h4>
                        <p className="text-slate-600 mb-4">
                            Developed a Python script to analyze local weather patterns for the Community Garden project, optimizing watering schedules to conserve 15% more water.
                        </p>
                        <div className="flex gap-2 mt-2">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Python</span>
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Data Analysis</span>
                        </div>
                    </motion.div>

                    {/* Card 3: Reading List / Intellectual Influences */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                    >
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                            <Microscope className="w-6 h-6 text-amber-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Current Reading List</h4>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><em>Sapiens</em> by Yuval Noah Harari</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><em>Thinking, Fast and Slow</em> by Daniel Kahneman</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span><em>The Code Breaker</em> by Walter Isaacson</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

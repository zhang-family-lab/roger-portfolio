"use client";

import { motion } from "framer-motion";
import { Play, User, Users, MapPin, Mail } from "lucide-react";

export default function SoccerShowcase() {
    return (
        <section id="soccer" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Athletic Profile
                    </h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                        Midfield Playmaker
                    </h3>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                        Technical midfielder with high soccer IQ, excellent distribution, and strong defensive work rate.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Video Area */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-2xl group"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/iSlCTRcCxWg"
                                title="Roger Zhang Soccer Highlights"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </motion.div>
                    </div>

                    {/* Recruitment Sidebar */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                        >
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                <User className="w-5 h-5 mr-2 text-blue-600" />
                                Player Stats
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Number</span>
                                    <span className="font-bold text-slate-900">#41</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Position</span>
                                    <span className="font-bold text-slate-900">Midfield</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                                    <span className="text-slate-500">Height</span>
                                    <span className="font-bold text-slate-900">5'10"</span>
                                </li>
                                <li className="flex justify-between items-center pb-2">
                                    <span className="text-slate-500">Class</span>
                                    <span className="font-bold text-slate-900">2027</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                        >
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-blue-600" />
                                Team Info
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-slate-500">Club</p>
                                    <p className="font-bold text-slate-900">Bay Area Surf Club</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">High School</p>
                                    <p className="font-bold text-slate-900">Archbishop Mitty HS</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-600/20"
                        >
                            <h4 className="text-lg font-bold mb-2">Coach Contact</h4>
                            <p className="font-medium mb-4">Will Boehmer</p>
                            <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                                <Mail className="w-4 h-4 mr-2" />
                                Contact Coach
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

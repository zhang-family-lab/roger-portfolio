"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Users, Star, Clock, Heart, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const milestones = [
    {
        year: "2023",
        title: "Program Director",
        description: (
            <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
                <li><strong>Curriculum Development:</strong> Spent 200+ hours designing leadership modules focused on peer-mentorship and conflict resolution.</li>
                <li><strong>Operational Leadership:</strong> Managed end-to-end logistics for week-long intensive camps, overseeing a 40-person staff.</li>
                <li><strong>Consistent Engagement:</strong> Maintained year-round commitment balancing high-stakes leadership with academics and athletics.</li>
            </ul>
        ),
        icon: Star,
    },
    {
        year: "2022",
        title: "Senior Patrol Leader",
        description: "Spearheaded weekly meetings and outings for a troop of 50 scouts. Implemented a new mentorship program that increased junior scout retention by 15%.",
        icon: Users,
    },
    {
        year: "2021",
        title: "Eagle Scout Rank",
        description: "Achieved Scouting's highest honor. Led a community garden renovation project coordinating 150+ volunteer hours.",
        icon: Award,
    },
    {
        year: "2019",
        title: "Patrol Leader",
        description: "First leadership role. Learned foundational skills in team building, communication, and outdoor survival.",
        icon: Calendar,
    },
];

export default function WhiteStag() {
    const [isCertOpen, setIsCertOpen] = useState(false);

    return (
        <section id="white-stag" className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
                        Leadership & Service
                    </h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                        White Stag Leadership Program
                    </h3>
                    <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                        Developing youth leadership skills through hands-on experience and mentorship.
                    </p>
                </div>

                {/* Impact Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center"
                    >
                        <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                        <h4 className="text-3xl font-bold text-white mb-1">600+</h4>
                        <p className="text-slate-400 text-sm">Service Hours (2024)</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center"
                    >
                        <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                        <h4 className="text-3xl font-bold text-white mb-1">40+</h4>
                        <p className="text-slate-400 text-sm">Staff Managed</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center"
                    >
                        <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                        <h4 className="text-3xl font-bold text-white mb-1">200+</h4>
                        <p className="text-slate-400 text-sm">Youth Trainees Impacted</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center cursor-pointer hover:border-yellow-400 transition-colors group"
                        onClick={() => setIsCertOpen(true)}
                    >
                        <div className="relative">
                            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ZoomIn className="w-4 h-4 text-yellow-400" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">National Gold</h4>
                        <p className="text-slate-400 text-sm">View Certificate</p>
                    </motion.div>
                </div>

                {/* Certificate Modal */}
                {isCertOpen && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setIsCertOpen(false)}
                    >
                        <div className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-2xl">
                            <Image 
                                src="/images/white_stag/pvsa-certificate.jpg" 
                                alt="President's Volunteer Service Award Certificate" 
                                width={800} 
                                height={600} 
                                className="w-full h-auto"
                            />
                            <button 
                                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                onClick={() => setIsCertOpen(false)}
                            >
                                <span className="sr-only">Close</span>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <div className="relative max-w-4xl mx-auto mb-20">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Box */}
                                <div className="w-5/12">
                                    <div className={`p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors ${index % 2 === 0 ? "text-left" : "text-right"
                                        }`}>
                                        <span className="text-blue-400 font-bold text-lg mb-2 block">{item.year}</span>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <div className="text-slate-400 text-sm leading-relaxed">{item.description}</div>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900 z-10">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>

                                {/* Spacer */}
                                <div className="w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Reflection Quote */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center bg-slate-800/50 p-8 rounded-3xl border border-slate-700"
                >
                    <p className="text-xl md:text-2xl text-slate-300 italic font-serif">
                        "My 600+ hours at White Stag taught me that leadership is a performance of empathy. Whether I’m leading a cello section, a midfield press, or a staff of 40, the goal is the same: elevating the people around me."
                    </p>
                    <div className="mt-4 font-bold text-white">— Roger Zhang</div>
                </motion.div>
            </div>
        </section>
    );
}

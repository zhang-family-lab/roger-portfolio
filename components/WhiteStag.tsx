"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Users, Star } from "lucide-react";

const milestones = [
    {
        year: "2023",
        title: "Program Director",
        description: "Led a staff of 40+ to organize a week-long leadership camp for 200 trainees. Responsible for curriculum development and operational logistics.",
        icon: Star,
    },
    {
        year: "2022",
        title: "Senior Patrol Leader",
        description: "Managed day-to-day activities for a troop of 50 scouts. Mentored junior leaders and facilitated conflict resolution workshops.",
        icon: Users,
    },
    {
        year: "2021",
        title: "Eagle Scout Rank",
        description: "Achieved the highest rank in Scouting. Service project involved renovating a local community garden, coordinating 150+ volunteer hours.",
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

                <div className="relative max-w-4xl mx-auto">
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
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
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
            </div>
        </section>
    );
}

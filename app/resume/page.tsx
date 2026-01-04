"use client";

import { Mail, MapPin, Globe, Printer, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 print:bg-white print:py-0">
            {/* Print Controls - Hidden when printing */}
            <div className="max-w-4xl mx-auto px-8 mb-8 flex justify-end print:hidden">
                <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                >
                    <Printer size={18} />
                    Save as PDF
                </button>
            </div>

            {/* Resume Paper */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none p-12 md:p-16 print:p-0 text-slate-800"
            >
                {/* Header */}
                <header className="border-b-2 border-blue-600 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                            Roger Zhang
                        </h1>
                        <p className="text-xl text-blue-600 font-medium">
                            Scholar-Athlete & Community Leader
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-blue-600" />
                            <a href="mailto:roger.zhangruizhe@gmail.com" className="hover:text-blue-600">
                                roger.zhangruizhe@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-blue-600" />
                            <span>rogerzhang.me</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-600" />
                            <span>San Jose, CA</span>
                        </div>
                    </div>
                </header>

                {/* Content Grid */}
                <div className="space-y-8">
                    
                    {/* Education */}
                    <section>
                        <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">
                            Education
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <div className="text-slate-500 font-medium text-sm pt-1">
                                2023 – Present
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-lg text-slate-900">Archbishop Mitty High School</h3>
                                    <span className="text-slate-600 font-medium">San Jose, CA</span>
                                </div>
                                <p className="text-slate-700 mt-1">
                                    <strong>GPA:</strong> 4.2 Weighted / 3.8 Unweighted
                                </p>
                                <p className="text-slate-600 text-sm mt-1">
                                    Relevant Coursework: AP World History, AP Computer Science Principles, Honors Chemistry.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Honors & Awards */}
                    <section>
                        <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">
                            Honors & Awards
                        </h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                                <div className="text-slate-500 font-medium text-sm pt-1">2024</div>
                                <div>
                                    <h3 className="font-bold text-slate-900">President’s Volunteer Service Award (Gold)</h3>
                                    <p className="text-slate-600 text-sm">
                                        Recognized for completing 600+ hours of community service in a single year, demonstrating exceptional commitment to civic participation.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                                <div className="text-slate-500 font-medium text-sm pt-1">2023</div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Certificate of Merit (CM) Level 10 Honors</h3>
                                    <p className="text-slate-600 text-sm">
                                        Achieved highest level in state piano curriculum with Honors distinction. Selected to perform at the MTAC State Convention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Leadership Experience */}
                    <section>
                        <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">
                            Leadership Experience
                        </h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                                <div className="text-slate-500 font-medium text-sm pt-1">
                                    2023 – Present
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">White Stag Leadership Program</h3>
                                    <p className="text-blue-600 font-medium text-sm mb-2">Program Director & Youth Staff</p>
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-sm">
                                        <li><strong>Curriculum Development:</strong> Designed 200+ hours of leadership modules focused on peer-mentorship and conflict resolution.</li>
                                        <li><strong>Operational Management:</strong> Managed end-to-end logistics for week-long intensive camps, overseeing a 40-person staff and 200+ trainees.</li>
                                        <li><strong>Mentorship:</strong> Mentored junior staff members, increasing retention rates by 15% through a new peer-support initiative.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Athletics & Arts */}
                    <section>
                        <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">
                            Extracurriculars
                        </h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                                <div className="text-slate-500 font-medium text-sm pt-1">Athletics</div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Competitive Soccer</h3>
                                    <p className="text-slate-600 text-sm">
                                        Varsity Athlete / MLS Next Level. Dedicated to high-performance training and team strategy.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                                <div className="text-slate-500 font-medium text-sm pt-1">Arts</div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Visual Arts & Piano</h3>
                                    <p className="text-slate-600 text-sm">
                                        <strong>Piano:</strong> 10+ years of classical training. Performed at regional showcases.
                                        <br />
                                        <strong>Visual Arts:</strong> Specializing in charcoal and oil painting. Portfolio selected for school gallery exhibition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects / Research */}
                    <section>
                        <h2 className="text-xl font-bold text-blue-800 uppercase tracking-wider border-b border-slate-200 pb-2 mb-4">
                            Projects & Research
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4">
                            <div className="text-slate-500 font-medium text-sm pt-1">2024</div>
                            <div>
                                <h3 className="font-bold text-slate-900">History Research Paper</h3>
                                <p className="text-slate-600 text-sm">
                                    "The Economic Impact of the Silk Road on Modern Trade Policies." Analyzed primary sources to draw parallels between ancient trade routes and the Belt and Road Initiative.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </motion.div>
        </div>
    );
}

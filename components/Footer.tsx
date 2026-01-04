import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <span className="text-2xl font-bold text-white tracking-tight">ROGER ZHANG</span>
                        <p className="mt-1 text-sm text-slate-500">Scholar, Athlete, Artist.</p>
                    </div>
                    <div className="flex space-x-6 items-center">
                        <a 
                            href="/Roger_Zhang_Resume_2027.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Download Resume
                        </a>
                        <a href="mailto:roger.zhangruizhe@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Roger Zhang. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

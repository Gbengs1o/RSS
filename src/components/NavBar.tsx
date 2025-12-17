"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/mockData";

// Premium SVG Icons for each category
const CategoryIcon = ({ icon, className }: { icon: string; className?: string }) => {
    const iconClass = className || "w-5 h-5";

    switch (icon) {
        case "home":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            );
        case "bowl":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8H4z" />
                    <path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                </svg>
            );
        case "ice":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            );
        case "carrot":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 21l10-10" />
                    <path d="M17 3c1.5 1.5 1.5 4 0 5.5L11 14l-2-2L14.5 6.5C16 5 16 2.5 17 3z" />
                </svg>
            );
        case "wheat":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V8" />
                    <path d="M9 10c-1.5-2-1.5-4 0-6" />
                    <path d="M15 10c1.5-2 1.5-4 0-6" />
                </svg>
            );
        case "drink":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                </svg>
            );
        case "can":
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 2h8v4H8z" />
                    <rect x="6" y="10" width="12" height="12" rx="2" />
                </svg>
            );
        default:
            return (
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            );
    }
};

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "RSS Retail", href: "/retail" },
        { name: "RSS Wholesales", href: "/wholesale" },
        { name: "About RSS", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="w-full bg-[#f7f7f7] border-b border-gray-100 z-40 h-[64px] relative">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6 h-full flex items-center justify-between">

                {/* Left: All Categories Button - Opens dropdown on MOBILE only */}
                <div className="relative">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center justify-between w-[200px] md:w-[312px] h-[48px] bg-gradient-to-r from-[#333] to-[#1a1a1a] text-white px-4 md:px-6 rounded-lg md:rounded-b-none md:rounded-t-lg hover:from-[#444] hover:to-[#222] transition-all shadow-md"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col gap-[4px] w-5">
                                <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px] lg:rotate-0 lg:translate-y-0" : ""}`} />
                                <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 lg:opacity-100" : ""}`} />
                                <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px] lg:rotate-0 lg:translate-y-0" : ""}`} />
                            </div>
                            <span className="font-semibold text-[14px] md:text-[15px]">All Categories</span>
                        </div>
                    </button>

                    {/* MOBILE ONLY: Dropdown Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="lg:hidden absolute left-0 right-0 top-[52px] w-full min-w-[280px] bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50"
                            >
                                <div className="py-2">
                                    {categories.map((cat, idx) => (
                                        <Link
                                            key={`mobile-${cat.slug}-${idx}`}
                                            href={cat.slug ? `/category/${cat.slug}` : "/"}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-all group">
                                                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-[#F58220]/10 transition-colors">
                                                    <div className="text-gray-500 group-hover:text-[#F58220] transition-colors">
                                                        <CategoryIcon icon={cat.icon} className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                <span className="text-[14px] font-medium text-[#1a1a1a] group-hover:text-[#F58220] transition-colors">
                                                    {cat.name}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile Nav Links */}
                                <div className="border-t border-gray-100 py-2">
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block px-4 py-3 text-[14px] font-medium ${isActive ? "text-[#F58220]" : "text-[#1a1a1a]"}`}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right: Nav Links - Desktop only */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[14px] font-medium transition-all whitespace-nowrap relative group ${isActive ? "text-[#F58220]" : "text-[#1a1a1a] hover:text-[#F58220]"}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#F58220] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

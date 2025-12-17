"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";

export default function RetailHero() {
    return (
        <section className="w-full bg-white pb-8">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6">

                {/* Top Bar: Breadcrumbs & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-3 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-[#F58220] flex items-center gap-1 transition-colors">
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
                        <span className="text-[#F58220] font-medium">RSS Retail</span>
                    </div>

                    {/* Filters (Visual Only) */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-between min-w-[160px] px-4 py-2 border border-gray-100 rounded bg-white text-sm cursor-pointer hover:border-[#F58220]/50 transition-colors group">
                            <span className="text-gray-500 group-hover:text-[#1a1a1a]">Select Price</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#F58220]" />
                        </div>
                        <div className="flex items-center justify-between min-w-[160px] px-4 py-2 border border-gray-100 rounded bg-white text-sm cursor-pointer hover:border-[#F58220]/50 transition-colors group">
                            <span className="text-gray-500 group-hover:text-[#1a1a1a]">Sort by: Latest</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#F58220]" />
                        </div>
                    </div>
                </div>

                {/* Discount Banner */}
                <div className="relative w-full h-[358px] rounded-lg overflow-hidden mt-2">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600')",
                        }}
                    >
                        {/* Overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 text-white text-left items-start">

                        {/* Tag & Title */}
                        <div className="space-y-2 mb-8">
                            <span className="text-sm font-medium tracking-wide">Best Deals</span>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Sale of the Month</h2>
                        </div>

                        {/* Timer */}
                        <div className="flex items-center gap-2 mb-8">
                            <TimerBlock value="00" label="Days" />
                            <span className="text-2xl font-light opacity-60 pb-4">:</span>
                            <TimerBlock value="02" label="Hours" />
                            <span className="text-2xl font-light opacity-60 pb-4">:</span>
                            <TimerBlock value="18" label="Mins" />
                            <span className="text-2xl font-light opacity-60 pb-4">:</span>
                            <TimerBlock value="46" label="Secs" />
                        </div>

                        {/* Button */}
                        <button className="flex items-center gap-3 bg-[#F58220] hover:bg-[#e0761d] text-white px-8 py-3 rounded-full transition-all group">
                            <span className="font-semibold text-sm">Shop Now</span>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                <path d="M7.9 12.5L14.4 6.5L7.9 0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.4 6.5L0.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* 56% Off Circle Badge */}
                    <div className="absolute top-10 right-10 md:right-20 w-[100px] h-[100px] bg-[#FF8A00] rounded-full flex flex-col items-center justify-center text-white shadow-lg animate-pulse-slow">
                        <span className="text-2xl font-bold leading-none">56%</span>
                        <span className="text-sm font-medium opacity-90">Off</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

function TimerBlock({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[40px] h-[36px] md:w-[48px] md:h-[44px] flex items-center justify-center text-2xl md:text-3xl font-regular text-[#F58220] bg-transparent">
                {/* JSON uses orange text for numbers? Let's check. 
                   JSON: Color {r: 0.96, g: 0.50, b: 0.12} is Orange. 
                   But background? JSON says Frame fills - wait. 
                   Frame 198: fills none or... children 00 text is orange. 
                   Wait, actually design usually has white text on these banners if bg is dark image.
                   But JSON for '00' Text says color is Orange (r 0.96...). 
                   So numbers are Orange? That might be hard to read on dark.
                   Let's re-read carefully.
                   "00" Text fills: Orange.
                   Wait, Frame 198 (container for 00) has no fill listed? 
                   Ah, Frame 198 has NO fills listed in the JSON snippet provided for it directly, 
                   but visual inspection of similar designs suggests boxes.
                   However, adhering to JSON: Text is Orange. 
                   Let's stick to Orange Text. If it looks bad on the image, I'll add a white bg box.
                   The standard template for this usually is white boxes with visual styling.
                   The JSON shows Frame 198 has cornerRadius 6.
                   Let's look at the text color again.
                   "00" Text -> Fills -> Solid Color -> Orange.
                   Let's trust the JSON but add a backing if needed. 
                   For now, let's make the numbers Orange and maybe put them in a small white/glassy box to ensure contrast?
                   JSON doesn't explicitly show a white fill for Frame 198.
                   BUT usually these "Discount Banner" templates have white boxes.
                   Actually, checking children of "Discount Bannar": "Frame 198"...
                   Wait, I missed if Frame 198 has fills.
                   "fills": [ { "type": "SOLID", "color": ..., "opacity": 1 } ] ??? No, I can't see fills for Frame 198 in the snippet.
                   Wait, I see "fills": [] for Breadcumb > Home Icon frame.
                   For Frame 198, I see children but not fills.
                   I will assume standard design patterns: Translucent or White Box.
                   Let's try White Box with Orange Text, standard for e-commerce.
               */}
                <span className="text-[#FF8A00] drop-shadow-sm">{value}</span>
            </div>
            <span className="text-xs uppercase tracking-wide opacity-80 mt-1">{label}</span>
        </div>
    );
}

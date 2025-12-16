"use client";
import React, { useState, useEffect } from "react";

export default function PromotionalBanners() {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "02",
        mins: "18",
        secs: "46",
    });

    useEffect(() => {
        // Simple countdown simulation
        const timer = setInterval(() => {
            const date = new Date();
            setTimeLeft({
                days: "00",
                hours: String(23 - date.getHours()).padStart(2, "0"),
                mins: String(59 - date.getMinutes()).padStart(2, "0"),
                secs: String(59 - date.getSeconds()).padStart(2, "0"),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full py-8 md:py-12">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Banner 1: Sale of the month */}
                    <div className="relative rounded-lg overflow-hidden h-[536px] bg-gray-100 group">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                            alt="Sale of the Month"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col justify-start pt-12 items-center text-center">
                            <span className="text-[14px] font-medium font-sans uppercase tracking-wider text-white bg-black/20 px-3 py-1 rounded backdrop-blur-sm mb-4">Best Deals</span>
                            <h3 className="text-[40px] leading-tight font-medium font-sans text-white mb-8 drop-shadow-md">Sale of the Month</h3>

                            {/* Timer */}
                            <div className="flex items-start gap-2 mb-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-[56px] h-[52px] bg-white rounded flex items-center justify-center text-[24px] text-[#1a1a1a] font-bold shadow-sm">
                                        {timeLeft.days}
                                    </div>
                                    <span className="text-[12px] text-white/90 mt-1 uppercase">Days</span>
                                </div>
                                <span className="text-white text-2xl font-light mt-2">:</span>
                                <div className="flex flex-col items-center">
                                    <div className="w-[56px] h-[52px] bg-white rounded flex items-center justify-center text-[24px] text-[#1a1a1a] font-bold shadow-sm">
                                        {timeLeft.hours}
                                    </div>
                                    <span className="text-[12px] text-white/90 mt-1 uppercase">Hours</span>
                                </div>
                                <span className="text-white text-2xl font-light mt-2">:</span>
                                <div className="flex flex-col items-center">
                                    <div className="w-[56px] h-[52px] bg-white rounded flex items-center justify-center text-[24px] text-[#1a1a1a] font-bold shadow-sm">
                                        {timeLeft.mins}
                                    </div>
                                    <span className="text-[12px] text-white/90 mt-1 uppercase">Mins</span>
                                </div>
                                <span className="text-white text-2xl font-light mt-2">:</span>
                                <div className="flex flex-col items-center">
                                    <div className="w-[56px] h-[52px] bg-white rounded flex items-center justify-center text-[24px] text-[#1a1a1a] font-bold shadow-sm">
                                        {timeLeft.secs}
                                    </div>
                                    <span className="text-[12px] text-white/90 mt-1 uppercase">Secs</span>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 bg-white text-[#F58220] px-8 py-3 rounded-full font-semibold hover:bg-[#F58220] hover:text-white transition-colors shadow-lg mt-auto mb-12">
                                Shop Now
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 6H14M14 6L9 1M14 6L9 11" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Banner 2: Low-Fat Meat */}
                    <div className="relative rounded-lg overflow-hidden h-[536px] bg-gray-100 group">
                        <img
                            src="https://images.unsplash.com/photo-1607623814075-e51df1bd6562?auto=format&fit=crop&q=80&w=800"
                            alt="Low-Fat Meat"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col items-center text-center justify-start pt-12">
                            <span className="text-[14px] font-medium font-sans text-white mb-2 drop-shadow-md">85% Fat Free</span>
                            <h3 className="text-[40px] leading-tight font-semibold font-sans text-white mb-6 drop-shadow-md">Low-Fat Meat</h3>

                            <div className="flex items-center gap-2 mb-8">
                                <span className="text-[18px] text-white">Started at</span>
                                <span className="text-[20px] font-semibold text-[#F58220]">$79.99</span>
                            </div>

                            <button className="flex items-center gap-2 bg-white text-[#F58220] px-8 py-3 rounded-full font-semibold hover:bg-[#F58220] hover:text-white transition-colors shadow-lg mt-auto mb-12">
                                Shop Now
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 6H14M14 6L9 1M14 6L9 11" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Banner 3: Summer Sale */}
                    <div className="relative rounded-lg overflow-hidden h-[536px] bg-gray-100 group">
                        <img
                            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800"
                            alt="Summer Sale"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col items-center text-center justify-start pt-12">
                            <span className="text-[14px] font-medium font-sans text-white mb-2 drop-shadow-md">Summer Sale</span>
                            <h3 className="text-[40px] leading-tight font-semibold font-sans text-white mb-4 drop-shadow-md">100% Fresh Fruit</h3>

                            <div className="flex items-center gap-2 mb-8">
                                <span className="text-[18px] text-white bg-black/60 px-3 py-1 rounded">Up to</span>
                                <span className="px-3 py-1 bg-[#FCD535] text-[#1a1a1a] font-bold rounded shadow-sm text-[18px]">64% OFF</span>
                            </div>

                            <button className="flex items-center gap-2 bg-white text-[#F58220] px-8 py-3 rounded-full font-semibold hover:bg-[#F58220] hover:text-white transition-colors shadow-lg mt-auto mb-12">
                                Shop Now
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 6H14M14 6L9 1M14 6L9 11" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

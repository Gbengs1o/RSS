"use client";

import { useState } from "react";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-[1320px] mx-auto px-4 md:px-6">
                {/* Video Container */}
                <div className="relative w-full h-[400px] md:h-[740px] rounded-[20px] overflow-hidden group">
                    {/* Background Image / Video Thumbnail */}
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
                        alt="Organic Farm"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        {/* Label */}
                        <span className="text-white text-[16px] font-normal mb-3" style={{ fontFamily: 'cursive' }}>
                            Video
                        </span>

                        {/* Heading */}
                        <h2 className="text-[28px] md:text-[36px] font-semibold text-white leading-tight mb-8 max-w-[495px]">
                            We&apos;re the Best Organic Farm in the World
                        </h2>

                        {/* Play Button */}
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="w-[80px] h-[80px] rounded-full border-[5px] border-[#F58220] flex items-center justify-center hover:scale-110 transition-transform bg-transparent hover:bg-[#F58220]/20"
                        >
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="#F58220">
                                <path d="M0 0L20 12L0 24V0Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Video Player Modal - shown when play is clicked */}
                    {isPlaying && (
                        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-[#F58220] transition-colors"
                            >
                                ✕
                            </button>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-white text-xl">
                                    {/* Placeholder for actual video - in production would be iframe or video element */}
                                    <div className="text-center">
                                        <svg className="w-20 h-20 mx-auto mb-4 text-[#F58220]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        <p>Video Player</p>
                                        <p className="text-sm text-gray-400 mt-2">Click X to close</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

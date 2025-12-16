"use client";

import { useState, useEffect } from "react";

export default function BestDeal() {
    // Countdown timer - set to expire in 2 days, 18 hours, 46 seconds
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 2,
        mins: 18,
        secs: 46
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, mins, secs } = prev;

                if (secs > 0) {
                    secs--;
                } else {
                    secs = 59;
                    if (mins > 0) {
                        mins--;
                    } else {
                        mins = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }

                return { days, hours, mins, secs };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6">
                {/* Best Deal Banner */}
                <div className="relative w-full h-auto md:h-[527px] rounded-2xl overflow-hidden" style={{ backgroundColor: '#EDF2EE' }}>
                    <div className="flex flex-col lg:flex-row items-center h-full">

                        {/* Left Image */}
                        <div className="hidden lg:block w-[521px] h-[308px] ml-5 my-auto">
                            <img
                                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600"
                                alt="Fresh Fruits"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Center Content */}
                        <div className="flex flex-col items-center justify-center py-10 lg:py-0 px-6 lg:px-12 text-center flex-1">
                            {/* Label */}
                            <span className="text-[#F58220] text-[16px] font-medium mb-3">Best Deals</span>

                            {/* Heading */}
                            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#002600] leading-tight mb-7">
                                Our Special Products<br />Deal of the Month
                            </h2>

                            {/* Countdown Timer */}
                            <div className="flex items-center gap-2 mb-8">
                                {/* Days */}
                                <div className="w-[80px] md:w-[96px] h-[80px] md:h-[96px] bg-white rounded-md flex flex-col items-center justify-center">
                                    <span className="text-[24px] md:text-[32px] text-[#F58220] font-normal">
                                        {formatNumber(timeLeft.days)}
                                    </span>
                                    <span className="text-[12px] md:text-[14px] text-[#618062] font-medium">Days</span>
                                </div>
                                <span className="text-[#618062] text-[20px]">:</span>

                                {/* Hours */}
                                <div className="w-[80px] md:w-[96px] h-[80px] md:h-[96px] bg-white rounded-md flex flex-col items-center justify-center">
                                    <span className="text-[24px] md:text-[32px] text-[#F58220] font-normal">
                                        {formatNumber(timeLeft.hours)}
                                    </span>
                                    <span className="text-[12px] md:text-[14px] text-[#618062] font-normal">Hours</span>
                                </div>
                                <span className="text-[#618062] text-[20px]">:</span>

                                {/* Minutes */}
                                <div className="w-[80px] md:w-[96px] h-[80px] md:h-[96px] bg-white rounded-md flex flex-col items-center justify-center">
                                    <span className="text-[24px] md:text-[32px] text-[#F58220] font-normal">
                                        {formatNumber(timeLeft.mins)}
                                    </span>
                                    <span className="text-[12px] md:text-[14px] text-[#618062] font-normal">Mins</span>
                                </div>
                                <span className="text-[#618062] text-[20px]">:</span>

                                {/* Seconds */}
                                <div className="w-[80px] md:w-[96px] h-[80px] md:h-[96px] bg-white rounded-md flex flex-col items-center justify-center">
                                    <span className="text-[24px] md:text-[32px] text-[#F58220] font-normal">
                                        {formatNumber(timeLeft.secs)}
                                    </span>
                                    <span className="text-[12px] md:text-[14px] text-[#618062] font-normal">Secs</span>
                                </div>
                            </div>

                            {/* Shop Now Button */}
                            <button className="px-8 py-3 bg-[#F58220] text-white text-[16px] font-semibold rounded-full hover:bg-[#e0761d] transition-all flex items-center gap-4">
                                Shop now
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M0 6h15M9 0l6 6-6 6" />
                                </svg>
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="hidden lg:block w-[400px] md:w-[704px] h-[350px] md:h-[495px] mr-0">
                            <img
                                src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800"
                                alt="Fresh Vegetables"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

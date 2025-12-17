export default function TopBar() {
    return (
        <div className="w-full bg-[#191919] text-white overflow-hidden relative z-50">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6 h-[48px] flex items-center justify-between">

                {/* Left: Sell on RSS FOODS - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Vector Icon */}
                    <div className="w-5 h-5 bg-white flex items-center justify-center rounded-[1px]">
                        {/* Use a simple placeholder or SVG if detailed */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#191919" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                    <span className="text-[16px] font-medium font-sans">Sell on RSS FOODS</span>
                </div>

                {/* Center: Up to 59% OFF - Adjusted for Mobile */}
                {/* On mobile, we position it statically or relatively to avoid overlap */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[5px] flex items-center gap-1.5 h-full md:h-[38px] bg-transparent">
                    <span className="text-[12px] md:text-[14px] font-semibold md:pt-2 whitespace-nowrap">Up to</span>
                    <span className="text-[24px] md:text-[36px] font-semibold text-[#F58220] leading-none">59%</span>
                    <span className="text-[16px] md:text-[20px] font-semibold md:pt-1">OFF</span>
                </div>

                {/* Right: Eng, Divider, Sign In/Up */}
                <div className="flex items-center gap-2 md:gap-4 ml-auto md:ml-0">

                    {/* Eng */}
                    <div className="flex items-center gap-1.5 cursor-pointer">
                        <span className="text-[12px]">Eng</span>
                        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" className="translate-y-[1px]">
                            <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="white" />
                        </svg>
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] h-[15px] bg-white/10 rotate-[20deg]"></div>

                    {/* Account */}
                    <div className="flex items-center gap-1 text-[12px] whitespace-nowrap">
                        <span className="cursor-pointer">Sign In</span>
                        <span className="hidden sm:inline">/</span>
                        <span className="hidden sm:inline cursor-pointer">Sign Up</span>
                    </div>

                </div>

            </div>
        </div>
    );
}

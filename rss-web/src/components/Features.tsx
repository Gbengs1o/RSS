export default function Features() {
    const features = [
        {
            title: "Free Shipping",
            subtitle: "Free shipping with discount",
            icon: (
                // Truck Icon
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F58220]">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            )
        },
        {
            title: "Great Support 24/7",
            subtitle: "Instant access to Contact",
            icon: (
                // Headphones Icon
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F58220]">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
            )
        },
        {
            title: "100% Secure Payment",
            subtitle: "We ensure your money is save",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F58220]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M8 11h8"></path>
                    <path d="M12 8v6"></path>
                </svg>
            )
        },
        {
            title: "Money-Back Guarantee",
            subtitle: "30 days money-back",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F58220]">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            )
        }
    ];

    return (
        <div className="max-w-[1728px] mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 bg-white border border-gray-100 p-6 md:p-10 rounded-lg md:rounded-none shadow-sm shadow-gray-200/50">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                        <div className="flex-shrink-0 w-[56px] h-[56px] bg-[#F2F2F2] rounded-full flex items-center justify-center group-hover:bg-[#FFF4EB] transition-colors relative overflow-hidden">
                            <div className="transform scale-75">
                                {feature.icon}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-0.5 group-hover:text-[#F58220] transition-colors leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-tight">
                                {feature.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

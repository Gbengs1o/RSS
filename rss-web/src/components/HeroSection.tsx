import Link from 'next/link';
import { categories } from '@/data/mockData';

const CategoryIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
        case "home":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
        case "bowl":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8H4z" /><path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6" /></svg>;
        case "ice":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><circle cx="12" cy="12" r="3" /></svg>;
        case "carrot":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 21l10-10" /><path d="M17 3c1.5 1.5 1.5 4 0 5.5L11 14l-2-2L14.5 6.5C16 5 16 2.5 17 3z" /></svg>;
        case "wheat":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V8" /><path d="M9 10c-1.5-2-1.5-4 0-6" /><path d="M15 10c1.5-2 1.5-4 0-6" /></svg>;
        case "drink":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /></svg>;
        case "can":
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2h8v4H8z" /><rect x="6" y="10" width="12" height="12" rx="2" /></svg>;
        default:
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /></svg>;
    }
};

export default function HeroSection() {
    return (
        <div className="max-w-[1728px] mx-auto px-4 md:px-6 py-0 flex flex-col lg:flex-row gap-0 mt-0">

            {/* Sidebar Categories - Desktop only, connects to NavBar button */}
            <div className="hidden lg:block w-[312px] flex-shrink-0 bg-white border border-gray-100 border-t-0 shadow-sm overflow-hidden h-fit -mt-[1px]">
                {categories.map((cat, idx) => (
                    <Link
                        key={`hero-cat-${cat.slug}-${idx}`}
                        href={cat.slug ? `/category/${cat.slug}` : "/"}
                    >
                        <div className={`flex items-center gap-3 px-6 py-3.5 cursor-pointer transition-all border-b border-gray-50 last:border-0 bg-white hover:bg-gradient-to-r hover:from-[#FFF8F3] hover:to-transparent text-[#1a1a1a] hover:text-[#F58220] group relative`}>
                            {/* Left accent bar on hover */}
                            <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#F58220] rounded-r-full opacity-0 group-hover:opacity-100 transition-all" />

                            <div className="w-6 h-6 flex items-center justify-center text-gray-500 group-hover:text-[#F58220] transition-colors">
                                <CategoryIcon icon={cat.icon} />
                            </div>
                            <span className={`font-medium text-[14px] group-hover:text-[#F58220] transition-colors ${cat.name === "Home Page" ? "font-bold" : ""}`}>
                                {cat.name}
                            </span>

                            {/* Arrow on hover */}
                            <svg className="ml-auto w-4 h-4 text-gray-300 group-hover:text-[#F58220] opacity-0 group-hover:opacity-100 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Main Banner */}
            <div className="flex-grow pt-4 lg:pt-0 lg:pl-6 w-full">
                <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[392px] bg-gray-100 group">
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
                        alt="Fresh Groceries"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center px-6 md:px-12">
                        <div className="max-w-[500px] flex flex-col gap-4 md:gap-6">

                            <h1 className="text-[32px] md:text-[48px] font-semibold text-white leading-[1.2] drop-shadow-md font-sans">
                                Fresh & Healthy <br />
                                Organic Food
                            </h1>

                            <div className="flex items-center gap-3">
                                <div className="w-[2px] h-[40px] md:h-[56px] bg-[#F58220]"></div>
                                <div className="text-white">
                                    <p className="text-[18px] md:text-[24px] font-medium leading-tight">Sale Up to</p>
                                    <p className="text-[18px] md:text-[24px] font-medium leading-tight">48% off</p>
                                </div>
                            </div>

                            <button className="mt-2 md:mt-4 px-6 md:px-8 py-2.5 md:py-3 bg-[#F58220] text-white text-[12px] md:text-[14px] font-medium rounded-full hover:bg-[#e0761d] transition-all w-fit flex items-center gap-2">
                                Shop Now
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

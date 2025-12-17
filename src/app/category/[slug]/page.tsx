"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { categories, products } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Helper to format price
const formatPrice = (price: number) => price.toFixed(2);

// Category Icon Component
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

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        return <div className="p-10 text-center">Category not found</div>;
    }

    const categoryProducts = products.filter((p) => p.category === slug);

    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <TopBar />
            <MainHeader />
            <NavBar />

            <main className="bg-gray-50 min-h-[calc(100vh-300px)]">
                {/* Main Content with Sidebar */}
                <div className="max-w-[1728px] mx-auto px-4 md:px-6 py-6">
                    <div className="flex gap-6">

                        {/* Category Sidebar - Desktop Only */}
                        <div className="hidden lg:block w-[280px] flex-shrink-0">
                            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden sticky top-4">
                                {/* Sidebar Header */}
                                <div className="bg-gradient-to-r from-[#333] to-[#1a1a1a] text-white px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col gap-[4px] w-5">
                                            <span className="w-5 h-[2px] bg-white rounded-full" />
                                            <span className="w-5 h-[2px] bg-white rounded-full" />
                                            <span className="w-5 h-[2px] bg-white rounded-full" />
                                        </div>
                                        <span className="font-semibold text-[15px]">All Categories</span>
                                    </div>
                                </div>

                                {/* Category List */}
                                <div className="py-2">
                                    {categories.map((cat, idx) => {
                                        const isActive = cat.slug === slug || (cat.slug === "" && slug === "");
                                        return (
                                            <Link
                                                key={`sidebar-${cat.slug}-${idx}`}
                                                href={cat.slug ? `/category/${cat.slug}` : "/"}
                                            >
                                                <div className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-all border-b border-gray-50 last:border-0 relative group ${isActive ? "bg-gradient-to-r from-[#FFF8F3] to-transparent" : "bg-white hover:bg-gradient-to-r hover:from-[#FFF8F3] hover:to-transparent"}`}>
                                                    {/* Active/Hover accent bar */}
                                                    <span className={`absolute left-0 top-1 bottom-1 w-[3px] bg-[#F58220] rounded-r-full transition-all ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

                                                    <div className={`w-6 h-6 flex items-center justify-center transition-colors ${isActive ? "text-[#F58220]" : "text-gray-500 group-hover:text-[#F58220]"}`}>
                                                        <CategoryIcon icon={cat.icon} />
                                                    </div>
                                                    <span className={`font-medium text-[14px] transition-colors ${isActive ? "text-[#F58220] font-semibold" : "text-[#1a1a1a] group-hover:text-[#F58220]"} ${cat.name === "Home Page" ? "font-bold" : ""}`}>
                                                        {cat.name}
                                                    </span>

                                                    {/* Arrow */}
                                                    <svg className={`ml-auto w-4 h-4 transition-all ${isActive ? "text-[#F58220] opacity-100" : "text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#F58220]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M9 18l6-6-6-6" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-grow">
                            {/* Category Header */}
                            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333] text-white py-8 px-6 rounded-xl mb-6 relative overflow-hidden">
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-4xl font-bold mb-2 capitalize relative z-10"
                                >
                                    {category.name}
                                </motion.h1>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-gray-400 flex items-center gap-2 relative z-10"
                                >
                                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                    <span>/</span>
                                    <span className="text-[#F58220]">{category.name}</span>
                                </motion.div>

                                {/* Decorative */}
                                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F58220]/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Products Grid */}
                            {categoryProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryProducts.map((product, idx) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        >
                                            <ProductCard
                                                id={product.id}
                                                image={product.image}
                                                title={product.name}
                                                price={formatPrice(product.price)}
                                                oldPrice={product.originalPrice ? formatPrice(product.originalPrice) : undefined}
                                                rating={product.rating}
                                                status={product.badge}
                                                badges={product.badge ? [{ text: product.badge, color: "#F58220" }] : []}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-xl">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400"
                                    >
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-2">No products found</h3>
                                    <p className="text-gray-500">We couldn&apos;t find any products in this category right now.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

"use client";

import Link from "next/link";

import { categories } from "@/data/mockData";

export default function ShopWithCategories() {
    return (
        <section className="w-full py-10">
            <div className="max-w-[1570px] mx-auto px-4 md:px-6">
                {/* Heading */}
                <h2 className="text-[20px] font-medium text-[#1a1a1a] mb-5" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                    Shop with Categories
                </h2>

                {/* Horizontal Scroll/Grid Container */}
                <div className="flex gap-[14px] overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-6 md:overflow-visible">
                    {categories.map((cat, idx) => (
                        <Link href={`/category/${cat.slug}`} key={idx} className="min-w-[200px] md:min-w-0 flex flex-col gap-[10px] group cursor-pointer block">
                            {/* Image Frame */}
                            <div className="w-full aspect-[250/259] relative rounded-[5px] overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay/Hover text could go here, but design shows text below */}
                            </div>

                            {/* Category Name */}
                            <h3 className="text-[18px] font-medium text-[#1a1a1a] group-hover:text-[#F58220] transition-colors"
                                style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
                                {cat.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

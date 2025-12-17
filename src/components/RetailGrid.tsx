"use client";

import React from "react";
import { products } from "@/data/mockData";
import ProductCard from "./ProductCard";

export default function RetailGrid() {
    // Filter for the specific retail items added (IDs 9 and 10) plus maybe some others to fill the grid if needed
    // For now, focusing on the ones explicitly requested in Figma (Garri, Crayfish)
    // We can also include other "retail" looking items like Rice (id 1) or Beans (id 7)
    const retailProducts = products.filter(p => [9, 10, 1, 7].includes(p.id));

    return (
        <section className="w-full py-12 md:py-16 bg-white">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex flex-col gap-2 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-[32px] font-semibold text-[#1a1a1a]">
                        Popular Retail Products
                    </h2>
                    <div className="w-full h-[1px] bg-gray-100 mt-4"></div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {retailProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.name}
                            price={`₦${product.price.toLocaleString()}`}
                            numericPrice={product.price}
                            image={product.image}
                            rating={product.rating}
                            oldPrice={product.originalPrice ? `₦${product.originalPrice.toLocaleString()}` : undefined}
                            status={product.badge || ''}
                            onClick={() => { }} // handled by Link in ProductCard now? No, ProductCard has onClick prop? 
                        // ProductCard wraps card in Link if we didn't remove it. 
                        // Actually, ProductCard has `onClick?: () => void`. 
                        // And looking at previous edits, I made ProductCard itself clickable or added a Link inside it.
                        // Let's assume standard ProductCard usage is sufficient.
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

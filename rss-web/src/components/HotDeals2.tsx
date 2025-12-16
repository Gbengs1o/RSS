"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";

// Product data for Popular Products section
const popularProducts = [
    {
        id: 101, // Using 100+ range to avoid ID conflicts with HotDeals
        name: "Bag Of Garri",
        price: 5000,
        originalPrice: 10000,
        rating: 4,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
        status: "Almost sold out In Grains Supply",
        badges: [
            { text: "Sale 50%", color: "#EA4B48" },
            { text: "Best Sale", color: "#2E3192" }
        ]
    },
    {
        id: 102,
        name: "Grayfish",
        price: 5000,
        originalPrice: 10000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=400",
        status: "Almost sold out In Grains Supply",
        badges: [
            { text: "Sale 50%", color: "#EA4B48" },
            { text: "Best Sale", color: "#2E3192" }
        ]
    },
    {
        id: 103,
        name: "Bag of Beans",
        price: 5000,
        originalPrice: 10000,
        rating: 4,
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=400",
        status: "Almost sold out In Grains Supply",
        badges: [
            { text: "Sale 50%", color: "#EA4B48" },
            { text: "Best Sale", color: "#2E3192" }
        ]
    },
    {
        id: 104,
        name: "Bag of Dry Pepper",
        price: 5000,
        originalPrice: 10000,
        rating: 5,
        image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&q=80&w=400",
        status: "Almost sold out In Grains Supply",
        badges: [
            { text: "Sale 50%", color: "#EA4B48" },
            { text: "Best Sale", color: "#2E3192" }
        ]
    }
];

export default function HotDeals2() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-[1570px] mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a]">
                        Popular Products
                    </h2>
                    <Link href="/deals" className="flex items-center gap-3 text-[#F58220] text-[16px] font-medium hover:opacity-80 transition-opacity">
                        View All
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                            <path d="M0 6H13.5" stroke="#F58220" strokeWidth="1.5" />
                            <path d="M9 1L14 6L9 11" stroke="#F58220" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>

                {/* Products Grid - Using ProductCard for cart integration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
                    {popularProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.name}
                            price={product.price.toLocaleString()}
                            numericPrice={product.price}
                            oldPrice={product.originalPrice.toLocaleString()}
                            image={product.image}
                            rating={product.rating}
                            status={product.status}
                            badges={product.badges}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

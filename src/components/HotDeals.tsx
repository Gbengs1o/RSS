import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        title: "Bag Of Garri",
        price: "5,000",
        oldPrice: "10,000",
        image: "https://images.unsplash.com/photo-1610738152504-207d8d46e08c?auto=format&fit=crop&q=80&w=400",
        status: "Almost sold out In Grains Supply",
        rating: 4,
        badges: [
            { text: "Sale", color: "#EA4B48", textColor: "text-white" },
            { text: "50%", color: "#ffffff", textColor: "text-[#1a1a1a]" }
        ]
        // Note: The Figma shows mixed badges, implementing closer to structure
    },
    {
        id: 2,
        title: "Crayfish (Big Size)",
        price: "5,000",
        oldPrice: "10,000",
        image: "https://images.unsplash.com/photo-1599321492578-838d1d818274?auto=format&fit=crop&q=80&w=400",
        rating: 5,
        badges: [{ text: "Best Sale", color: "#2E3192", textColor: "text-white" }]
    },
    {
        id: 3,
        title: "Fresh Tomatoes (Basket)",
        price: "2,500",
        oldPrice: "3,000",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
        rating: 4,
        badges: [{ text: "Sale", color: "#EA4B48" }, { text: "17%", color: "#fff", textColor: "text-black" }]
    },
    {
        id: 4,
        title: "Vegetable Oil (5L)",
        price: "8,500",
        oldPrice: "9,500",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcdbf41?auto=format&fit=crop&q=80&w=400",
        rating: 5
    },
    {
        id: 5,
        title: "Semovita (10kg)",
        price: "4,500",
        oldPrice: "5,000",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
        rating: 4
    },
    {
        id: 6,
        title: "Frozen Chicken (1kg)",
        price: "12,000",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400",
        rating: 5,
        status: "Hot"
    },
    {
        id: 7,
        title: "Parboiled Rice (50kg)",
        price: "48,000",
        oldPrice: "52,000",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
        status: "Best Seller",
        rating: 5
    },
    {
        id: 8,
        title: "Palm Oil (4L)",
        price: "6,000",
        oldPrice: "7,000",
        image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=400",
        rating: 4
    },
];

export default function HotDeals() {
    // Correcting badge data structure for map
    const getBadges = (product: typeof products[0]) => {
        // Custom logic to match Figma styling exactly
        if (product.id === 1) {
            return [
                { text: "Sale", color: "#EA4B48" },
                { text: "50%", color: "#ffffff", textColor: "text-black" }
            ]
        }
        if (product.id === 2) {
            return [{ text: "Best Sale", color: "#2E3192" }]
        }
        if (product.badges) return product.badges;
        return undefined;
    }

    return (
        <section className="w-full pb-16">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[24px] md:text-[32px] font-semibold text-[#1a1a1a] font-sans">
                        Hot Deals
                    </h2>
                    <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-100 hover:border-[#F58220] transition-colors group">
                        <span className="text-[16px] font-medium text-[#F58220]">View All</span>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" stroke="#F58220" strokeWidth="1.5">
                            <path d="M1 6H14M14 6L9 1M14 6L9 11" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            image={product.image}
                            rating={product.rating}
                            status={product.status}
                            badges={getBadges(product)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

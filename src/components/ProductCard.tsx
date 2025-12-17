"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

import Link from "next/link";

interface ProductCardProps {
    id: number;
    image: string;
    title: string;
    price: string;
    numericPrice?: number;
    oldPrice?: string;
    rating?: number;
    status?: string;
    badges?: Array<{ text: string; color: string; textColor?: string }>;
    onClick?: () => void;
}

export default function ProductCard({
    id,
    image,
    title,
    price,
    numericPrice,
    oldPrice,
    rating = 5,
    status,
    badges,
    onClick,
}: ProductCardProps) {
    const { addToCart } = useCart();
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const { showToast } = useToast();

    const inWishlist = isInWishlist(id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent Link navigation
        e.stopPropagation();
        const priceNum = numericPrice || parseFloat(price.replace(/,/g, ""));
        addToCart({
            id,
            name: title,
            price: priceNum,
            image,
        });
        showToast(`${title} added to cart!`, "success");
    };

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent Link navigation
        e.stopPropagation();
        if (inWishlist) {
            removeFromWishlist(id);
            showToast(`Removed from wishlist`, "info");
        } else {
            addToWishlist(id);
            showToast(`Added to wishlist!`, "success");
        }
    };

    return (
        <Link
            href={`/product/${id}`}
            className="flex flex-col gap-4 font-sans max-w-[368px] w-full relative cursor-pointer group/card block"
            onClick={onClick}
        >
            {/* Image Container with Buy Button */}
            <div className="relative w-full aspect-[368/392] bg-[#F7F7F8] rounded-[16px] overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges */}
                {badges && badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                        {badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className={`px-3 py-1 rounded-[4px] text-[14px] font-medium ${badge.textColor || "text-white"}`}
                                style={{ backgroundColor: badge.color }}
                            >
                                {badge.text}
                            </span>
                        ))}
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={handleWishlistToggle}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-20 
                        ${inWishlist ? "bg-red-500 text-white" : "bg-white text-gray-400 hover:text-red-500"}`}
                >
                    <svg
                        className="w-5 h-5"
                        fill={inWishlist ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>

                {/* Buy Button Overlay */}
                <button
                    onClick={handleAddToCart}
                    className="absolute bottom-4 right-4 w-[67px] h-[67px] bg-[#F58220] rounded-full flex items-center justify-center shadow-lg hover:bg-[#e0761d] transition-transform hover:scale-110 active:scale-95 group-hover:rotate-12 z-20"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-semibold text-[#1a1a1a] group-hover/card:text-[#F58220] transition-colors">
                    {title}
                </h3>

                {/* Price Row */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <span className="text-[18px] font-semibold text-[#F58220]">₦</span>
                        <span className="text-[18px] font-semibold text-[#F58220]">{price}</span>
                    </div>
                    {oldPrice && (
                        <div className="flex items-center gap-1 text-[#999999] opacity-60 line-through">
                            <span className="text-[12px] font-medium">₦</span>
                            <span className="text-[12px] font-medium">{oldPrice}</span>
                        </div>
                    )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "text-[#FFB800]" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Status Text */}
                {status && (
                    <p className="text-[14px] text-[#F58220] mt-1 font-medium">{status}</p>
                )}
            </div>
        </Link>
    );
}

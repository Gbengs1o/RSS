"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import { products } from "@/data/mockData";
import { categories } from "@/data/mockData"; // Ensure we can find category name if needed

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart(); // Destructure properly from useCart
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const { showToast } = useToast();

    // Find product
    const product = products.find((p) => p.id === Number(params.id));

    // Gallery State
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Quantity State
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <h1 className="text-2xl font-bold font-sans">Product not found</h1>
                <Link
                    href="/"
                    className="px-6 py-2 bg-[#F58220] text-white rounded-md hover:bg-[#e0761d] transition"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    const inWishlist = isInWishlist(product.id);
    const productImages = product.images || [product.image]; // Fallback if images array missing

    // Handlers
    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
        });
        showToast(`Added ${quantity} ${product.name} to cart!`, "success");
    };

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
            showToast("Removed from wishlist", "info");
        } else {
            addToWishlist(product.id);
            showToast("Added to wishlist!", "success");
        }
    };

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    // Social Share Mock Links (just visuals/placeholders as requested or generic links)
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="max-w-[1570px] mx-auto px-4 md:px-6 pt-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-[#777] mb-8 font-sans">
                    <Link href="/" className="hover:text-[#F58220] transition-colors">Home</Link>
                    <span>/</span>
                    <Link href={`/category/${product.category}`} className="hover:text-[#F58220] transition-colors capitalize">
                        {product.category.replace("-", " ")}
                    </Link>
                    <span>/</span>
                    <span className="text-[#F58220] font-medium">{product.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Image Gallery */}
                    <div className="w-full lg:w-[810px] flex gap-4 md:gap-6">
                        {/* Thumbnails Vertical List - Desktop/Tablet */}
                        <div className="hidden md:flex flex-col gap-3 w-20">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImageIndex(idx)}
                                    className={`w-20 h-[90px] border rounded-md overflow-hidden bg-[#F7F7F8] transition-all
                                        ${selectedImageIndex === idx ? 'border-[#F58220] ring-1 ring-[#F58220]' : 'border-transparent hover:border-gray-300'}`}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain p-1" />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 bg-[#F7F7F8] rounded-xl flex items-center justify-center p-8 aspect-square md:aspect-auto md:h-[556px] relative overflow-hidden group">
                            <img
                                src={productImages[selectedImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Mobile Thumbnails (Horizontal below main image if needed, or overlay) - keeping it simple for now */}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex-1 flex flex-col pt-2 w-full lg:max-w-[568px]">
                        {/* Title & Stock */}
                        <div className="flex flex-col gap-3 mb-6">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h1 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] font-sans">
                                    {product.name}
                                </h1>
                                <span className={`px-3 py-1 rounded bg-[#EAF7EC] text-[#2C742F] text-sm font-medium ${product.stock && product.stock > 0 ? '' : 'bg-red-50 text-red-600'}`}>
                                    {product.stock && product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>

                            {/* Rating & SKU */}
                            <div className="flex items-center gap-4 text-sm text-[#666] font-sans">
                                <div className="flex items-center gap-1">
                                    <div className="flex text-[#FFB800]">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-black font-medium">{product.rating} Star Rating</span>
                                    <span>({product.reviews || 0} User feedback)</span>
                                </div>
                                <span className="hidden md:block w-px h-4 bg-gray-300"></span>
                                <div className="flex gap-2">
                                    <span className="font-medium text-black">SKU:</span>
                                    <span>{product.sku || 'N/A'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center text-[#F58220] font-semibold text-2xl md:text-[32px]">
                                <span>₦</span>
                                <span>{product.price.toLocaleString('en-NG')}</span>
                            </div>
                            {product.originalPrice && (
                                <>
                                    <div className="flex items-center text-gray-400 line-through text-lg">
                                        <span>₦</span>
                                        <span>{product.originalPrice.toLocaleString('en-NG')}</span>
                                    </div>
                                    <div className="bg-[#fadbc7] text-[#DA3A3A] px-3 py-1 rounded-full text-sm font-medium">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="w-full h-px bg-gray-200 mb-6"></div>

                        {/* Brand & Share */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-[#1a1a1a] font-medium">Brand:</span>
                                {/* Brand Logo Placeholder - Using Text for now */}
                                <div className="border border-gray-200 rounded px-3 py-1 text-sm font-medium text-gray-700 bg-white shadow-sm">
                                    {product.brand || 'Generic'}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-[#1a1a1a] font-medium">Share item:</span>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-[#E5F8ED] hover:bg-[#d4f0df] flex items-center justify-center text-[#00B207] transition-colors">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.5-3.89 3.77-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" /></svg>
                                    </button>
                                    <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#4D4D4D] transition-colors">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" /></svg>
                                    </button>
                                    <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#4D4D4D] transition-colors">
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#666] text-[15px] leading-6 mb-8 font-sans">
                            {product.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 border-t border-gray-200 pt-8 mt-auto">
                            {/* Quantity */}
                            <div className="flex items-center bg-white border border-gray-300 rounded-[43px] px-2 p-1">
                                <button
                                    onClick={decreaseQty}
                                    className="w-8 h-8 rounded-full bg-[#f2f2f2] hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center font-medium text-[#1a1a1a]">{quantity}</span>
                                <button
                                    onClick={increaseQty}
                                    className="w-8 h-8 rounded-full bg-[#f2f2f2] hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add To Cart */}
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-[#F58220] text-white h-[51px] rounded-[43px] font-semibold text-lg hover:bg-[#e0761d] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                            >
                                <span>Add to Cart</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            </button>

                            {/* Wishlist */}
                            <button
                                onClick={handleWishlistToggle}
                                className={`w-[52px] h-[52px] rounded-full border border-gray-200 flex items-center justify-center transition-all ${inWishlist ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white text-gray-400 hover:text-red-500 hover:border-red-200'}`}
                            >
                                <svg className="w-6 h-6" fill={inWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

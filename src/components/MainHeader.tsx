"use client";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function MainHeader() {
    const { cartCount, cartTotal, setIsCartOpen } = useCart();
    const { wishlistCount } = useWishlist();

    return (
        <div className="w-full h-auto md:h-[88px] bg-white border-b border-gray-100 py-4 md:py-0">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

                {/* Top Row on Mobile: Logo + Actions */}
                <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-8">
                    {/* LOGO */}
                    <div className="flex-shrink-0 cursor-pointer">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F58220] to-[#d9731c] bg-clip-text text-transparent">
                            RSS Foods
                        </div>
                    </div>

                    {/* ACTIONS (Visible here on Mobile, Right aligned) */}
                    <div className="flex md:hidden items-center gap-4">
                        {/* Mobile Cart Icon */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 hover:bg-gray-50 rounded-full transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F58220] text-white text-[10px] flex items-center justify-center rounded-full font-bold animate-pulse-once">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* SEARCH BAR - 2nd Line on Mobile */}
                <div className="flex-grow w-full md:w-auto md:max-w-[600px]">
                    <div className="relative flex items-center w-full h-[40px] md:h-[48px] border border-gray-200 rounded-lg overflow-hidden bg-[#F7F7F7]">
                        <input
                            type="text"
                            placeholder="Search for items..."
                            className="w-full h-full px-4 bg-transparent outline-none text-[#1a1a1a] placeholder-gray-400 text-sm md:text-base"
                        />
                        <button className="h-full px-6 bg-[#F58220] text-white hover:bg-[#e0761d] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ACTIONS: Desktop View */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Wishlist Button */}
                    <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        {wishlistCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full font-bold">
                                {wishlistCount}
                            </span>
                        )}
                    </button>

                    {/* Cart Button */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 hover:bg-gray-50 rounded-full transition-colors flex items-center gap-2"
                    >
                        <div className="relative">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F58220] text-white text-xs flex items-center justify-center rounded-full font-bold animate-pulse-once">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col items-start leading-none text-sm">
                            <span className="text-gray-500 text-xs">Total</span>
                            <span className="font-bold text-[#1a1a1a]">₦{cartTotal.toLocaleString()}</span>
                        </div>
                    </button>

                    {/* User Profile */}
                    <Link href="/signin">
                        <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

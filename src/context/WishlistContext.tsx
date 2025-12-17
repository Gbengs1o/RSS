"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistContextType {
    wishlistItems: number[];
    addToWishlist: (id: number) => void;
    removeFromWishlist: (id: number) => void;
    isInWishlist: (id: number) => boolean;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlistItems, setWishlistItems] = useState<number[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem("rss-wishlist");
        if (savedWishlist) {
            try {
                setWishlistItems(JSON.parse(savedWishlist));
            } catch (e) {
                console.error("Failed to parse wishlist:", e);
            }
        }
        setIsHydrated(true);
    }, []);

    // Save wishlist to localStorage when it changes
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem("rss-wishlist", JSON.stringify(wishlistItems));
        }
    }, [wishlistItems, isHydrated]);

    const addToWishlist = (id: number) => {
        setWishlistItems((prev) => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
        });
    };

    const removeFromWishlist = (id: number) => {
        setWishlistItems((prev) => prev.filter((itemId) => itemId !== id));
    };

    const isInWishlist = (id: number) => wishlistItems.includes(id);

    const wishlistCount = wishlistItems.length;

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                wishlistCount,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}

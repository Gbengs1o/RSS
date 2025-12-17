"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ToastProvider } from "@/context/ToastContext";
import Toast from "@/components/Toast";
import CartDrawer from "@/components/CartDrawer";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            <WishlistProvider>
                <ToastProvider>
                    {children}
                    <Toast />
                    <CartDrawer />
                </ToastProvider>
            </WishlistProvider>
        </CartProvider>
    );
}

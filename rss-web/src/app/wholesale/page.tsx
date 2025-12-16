"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";

export default function WholesalePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <TopBar />
            <MainHeader />
            <NavBar />

            <main className="w-full flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 py-16 px-4">
                <div className="max-w-md text-center space-y-4">
                    <div className="w-16 h-16 bg-[#F58220]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="w-8 h-8 text-[#F58220]" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#1a1a1a]">RSS Wholesale</h1>
                    <p className="text-gray-500">
                        Bulk purchasing options coming soon! We are working on bringing you the best wholesale prices for your business needs.
                    </p>
                    <button className="px-6 py-2.5 bg-[#F58220] text-white rounded-lg hover:bg-[#e0761d] transition-colors font-medium">
                        Contact Sales
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}

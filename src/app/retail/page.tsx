import React from "react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RetailGrid from "@/components/RetailGrid";
import RetailHero from "@/components/RetailHero";

export default function RetailPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <TopBar />
            <MainHeader />
            <NavBar />


            <main>
                <RetailHero />
                <RetailGrid />
            </main>

            <Footer />
        </div>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Truck, Award, Users, Leaf, CheckCircle, Clock, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <TopBar />
            <MainHeader />
            <NavBar />

            <main>
                {/* 1. Hero Section */}
                <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2600')" }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block py-1 px-3 rounded-full bg-[#F58220]/20 border border-[#F58220] text-[#F58220] font-semibold text-sm mb-4 backdrop-blur-sm"
                        >
                            SINCE 2024
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            We Bring Nature{'\''}s Best <br /> <span className="text-[#F58220]">To Your Doorstep</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                        >
                            RSS Foods is more than just a grocery store. We are a movement dedicated to quality, freshness, and the joy of healthy living for every Nigerian family.
                        </motion.p>
                    </div>
                </section>

                {/* 2. Mission & Vision - Split Section */}
                <section className="py-20 px-4 md:px-6 max-w-[1728px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2600"
                                    alt="Fresh vegetables in a basket"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-xl">100% Organic</p>
                                    <p className="text-sm opacity-90">Sourced directly from farmers</p>
                                </div>
                            </div>

                            {/* Decorative Pattern using Nanobana-ish SVG Idea */}
                            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 opacity-20">
                                <svg viewBox="0 0 200 200" className="w-full h-full text-[#F58220] fill-current animate-spin-slow">
                                    <path d="M45.7,35.6C30.4,49.2,21.9,72.7,24.1,95c2.2,22.3,15.6,43.2,34.9,54.7c19.3,11.5,44.5,13.8,65.2,5.1 c20.7-8.7,36.8-28.7,39.3-51.1c2.5-22.4-7.6-43.5-24.6-56.5c-17-13-40.8-17.1-59.5-12C63.2,22.4,54.7,28.9,45.7,35.6z" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-10"
                        >
                            {/* Mission */}
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="hidden sm:flex flex-shrink-0 w-14 h-14 bg-[#EAF7EC] rounded-full items-center justify-center text-[#2C742F]">
                                    <Leaf size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                                        <span className="sm:hidden w-10 h-10 bg-[#EAF7EC] rounded-full flex items-center justify-center text-[#2C742F]">
                                            <Leaf size={20} />
                                        </span>
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To revolutionize the way you shop for food by providing convenient access to high-quality grains, frozen foods, and daily essentials. We aim to bridge the gap between fresh, organic farm produce and your dining table, ensuring every meal is healthy and delicious.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Vision */}
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="hidden sm:flex flex-shrink-0 w-14 h-14 bg-[#FFF3E6] rounded-full items-center justify-center text-[#F58220]">
                                    <Award size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                                        <span className="sm:hidden w-10 h-10 bg-[#FFF3E6] rounded-full flex items-center justify-center text-[#F58220]">
                                            <Award size={20} />
                                        </span>
                                        Our Vision
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To be Nigeria{'\''}s most trusted and customer-centric food retail brand, known for our unwavering commitment to quality, affordability, and exceptional service. We envision a future where accessing fresh nutrition is effortless for everyone.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. The RSS Story - Timeline Style */}
                <section className="py-20 bg-gray-50 overflow-hidden">
                    <div className="max-w-[1728px] mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">The RSS Journey</h2>
                            <div className="w-24 h-1 bg-[#F58220] mx-auto rounded-full"></div>
                        </div>

                        <div className="relative">
                            {/* Central Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-24">
                                {/* Story Item 1 */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
                                >
                                    <div className="md:w-5/12 text-center md:text-right order-2 md:order-1">
                                        <h3 className="text-2xl font-bold text-[#F58220] mb-2">2023 - The Spark</h3>
                                        <p className="text-gray-600">
                                            The idea was born from a simple observation: finding consistent, high-quality bulk grains and frozen foods was harder than it should be. We saw a need for a reliable source that families could trust blindly.
                                        </p>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#F58220] border-4 border-white rounded-full shadow-lg z-10 hidden md:block order-2"></div>
                                    <div className="md:w-5/12 order-1 md:order-3">
                                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" alt="Planning" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                                    </div>
                                </motion.div>

                                {/* Story Item 2 */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
                                >
                                    <div className="md:w-5/12 order-1">
                                        <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=600" alt="Launch" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#F58220] rounded-full shadow-lg z-10 hidden md:block order-2"></div>
                                    <div className="md:w-5/12 text-center md:text-left order-2 md:order-3">
                                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">2024 - RSS Foods Launched</h3>
                                        <p className="text-gray-600">
                                            We officially opened our doors (and website) to the public. Starting with a humble selection of premium grains, we quickly expanded to frozen foods and daily essentials, driven by overwhelming customer support.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Story Item 3 */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
                                >
                                    <div className="md:w-5/12 text-center md:text-right order-2 md:order-1">
                                        <h3 className="text-2xl font-bold text-[#F58220] mb-2">Today & Future</h3>
                                        <p className="text-gray-600">
                                            We are now serving thousands of households. Our simplified logistics and "customer-first" approach have set us apart. We aren{'\''}t just selling food; we are building a healthier community.
                                        </p>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#F58220] border-4 border-white rounded-full shadow-lg z-10 hidden md:block order-2"></div>
                                    <div className="md:w-5/12 order-1 md:order-3">
                                        <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=600" alt="Community" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Why Choose Us (Values) */}
                <section className="py-20 px-4 md:px-6 max-w-[1728px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#F58220] font-semibold text-sm uppercase tracking-wider">Our Core Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Shop With RSS?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Leaf, title: "100% Organic", desc: "We ensure all our produce is sourced from certified organic farms." },
                            { icon: Truck, title: "Fast Delivery", desc: "Get your groceries delivered to your doorstep in record time." },
                            { icon: ShieldCheck, title: "Quality Guarentee", desc: "If you{'\''}re not satisfied with the freshness, we{'\''}ll replace it." },
                            { icon: Clock, title: "24/7 Support", desc: "Our customer service team is always here to help you." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#F58220]/30 hover:shadow-xl transition-all duration-300 bg-white text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 5. Stats Counter Banner */}
                <section className="py-16 bg-[#F58220] text-white">
                    <div className="max-w-[1728px] mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                            {[
                                { number: "500+", label: "Happy Customers" },
                                { number: "150+", label: "Products" },
                                { number: "24h", label: "Fast Delivery" },
                                { number: "100%", label: "Satisfaction" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring" }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-3xl md:text-5xl font-bold mb-2">{stat.number}</span>
                                    <span className="text-sm md:text-base opacity-90 font-medium uppercase tracking-wide">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Call To Action Team/Join */}
                <section className="py-20 px-4 md:px-6 max-w-[1728px] mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="bg-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden text-white"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220] rounded-full filter blur-[100px] opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Best?</h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Join the thousands of Nigerian families who trust RSS Foods for their daily nutrition. Freshness is just a click away.
                            </p>
                            <Link href="/retail" className="inline-block px-8 py-4 bg-[#F58220] hover:bg-[#e0761d] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25">
                                Start Shopping Now
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <TopBar />
            <MainHeader />
            <NavBar />

            <main className="w-full max-w-[1728px] mx-auto px-4 md:px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Get in Touch</h1>
                            <p className="text-gray-600 text-lg">
                                Have questions about your order or our products? We&apos;re here to help. Reach out to us anytime.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                <div className="w-10 h-10 bg-[#F58220]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-[#F58220]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                    <p className="text-gray-600">(234) 801 234 5678</p>
                                    <p className="text-gray-500 text-sm mt-1">Mon-Sat 9:00am - 6:00pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                <div className="w-10 h-10 bg-[#F58220]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-[#F58220]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                    <p className="text-gray-600">support@rssfoods.com</p>
                                    <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                <div className="w-10 h-10 bg-[#F58220]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-[#F58220]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                                    <p className="text-gray-600">123 Market Street, Lagos Island</p>
                                    <p className="text-gray-600">Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows={4} placeholder="Your message here..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-[#F58220] text-white font-semibold rounded-lg hover:bg-[#e0761d] transition-colors shadow-lg shadow-orange-500/20">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full font-sans">
            {/* Newsletter Section */}
            <div className="w-full bg-[#F7F7F7] py-10 md:py-0 md:h-[162px] flex items-center">
                <div className="max-w-[1728px] mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

                    {/* Left Text */}
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <h2 className="text-[24px] font-semibold text-[#1a1a1a]">Subcribe our Newsletter</h2>
                        <p className="text-[14px] text-[#999999] max-w-[448px] leading-normal">
                            Stay updated with the latest products, special offers, and helpful tips. Join our community and never miss an update.
                        </p>
                    </div>

                    {/* Right: Input & Socials */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Input Group */}
                        <div className="flex items-center bg-white rounded-full p-1 pl-6 shadow-sm border border-[#E6E6E6] w-full max-w-[467px]">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow outline-none text-[#1a1a1a] placeholder-gray-500 text-[16px] bg-transparent"
                            />
                            <button className="bg-[#F58220] text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-[#e0761d] transition-colors">
                                Subscribe
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2">
                            {/* Facebook */}
                            <div className="w-10 h-10 bg-[#F58220] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e0761d] transition-colors">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="none">
                                    <path d="M11 10h2.5l1-4h-3.5V4.5a1 1 0 0 1 1-1h2.5V0.1a26 26 0 0 0-4 0C7 0 6 3 6 4.5V6H3v4h3v10h5V10z" fill="white" />
                                </svg>
                            </div>
                            {/* Twitter (X) - Using Simple Circle as in JSON it was gray/white? */}
                            {/* JSON says Ellipse with Twitter vector inside. Fill: #4D4D4D (0.3). Vector fill same. */}
                            <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="currentColor" className="text-[#4D4D4D]">
                                    <path d="M18 1.6875C17.3 2.025 16.625 2.1375 15.8375 2.25C16.625 1.7625 17.225 1.0125 17.525 0.1125C16.8125 0.5625 15.9875 0.8625 15.125 1.0125C14.4125 0.2625 13.4375 0 12.375 0C10.35 0 8.7 1.65 8.7 3.675C8.7 3.975 8.7375 4.2375 8.775 4.5C5.7 4.35 2.9625 2.925 1.1625 0.675C0.825 1.275 0.6375 1.9125 0.6375 2.625C0.6375 3.9 1.275 5.025 2.25 5.6625C1.65 5.625 1.0875 5.475 0.6 5.2125V5.25C0.6 7.05 1.8375 8.5125 3.525 8.85C3.1875 8.925 2.8875 8.9625 2.55 8.9625C2.325 8.9625 2.1 8.925 1.875 8.925C2.325 10.3875 3.675 11.4375 5.325 11.475C4.05 12.45 2.475 13.05 0.75 13.05C0.45 13.05 0.15 13.0125 0 13.0125C1.6125 14.0625 3.5625 14.625 5.625 14.625C12.375 14.625 16.0875 9.0375 16.0875 4.2C16.0875 4.05 16.0875 3.9 16.0875 3.7125C16.8 3.15 17.4375 2.475 18 1.6875Z" />
                                </svg>
                            </div>
                            {/* Instagram */}
                            <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" className="text-[#4D4D4D]" strokeWidth="1.5">
                                    <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" />
                                    <circle cx="9" cy="9" r="4.5" />
                                    <circle cx="13.5" cy="4.5" r="1.5" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-[#1A1A1A] text-white pt-12 pb-8 md:pt-[60px] md:pb-[60px]">
                <div className="max-w-[1728px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Column 1: Company Info */}
                        <div className="flex flex-col items-start gap-4 max-w-[376px]">
                            {/* Logo Image Placeholder from JSON */}
                            {/* JSON has an image fills on Rectangle 15:855. I will use a simple text or placeholder for now.*/}
                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F58220] to-[#d9731c] bg-clip-text text-transparent mb-2">
                                RSS Web
                            </div>
                            <p className="text-[#D0D0D0] text-[16px] leading-[1.6]">
                                Your trusted partner for quality food items — rice, pasta, semovita, and detergents — delivered fresh and fast. Shop early and save big this season!
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                <div className="flex items-center gap-2 bg-[#1A1A1A] border-b border-[#F58220] pb-1">
                                    <span className="text-white text-[16px] font-medium">+234 903 019 8544</span>
                                </div>
                                <span className="text-[#808080] text-[16px]">or</span>
                                <div className="flex items-center gap-2 bg-[#1A1A1A] border-b border-[#F58220] pb-1">
                                    <span className="text-white text-[16px] font-medium">hello@myrss.com.ng</span>
                                </div>
                            </div>
                        </div>

                        {/* Columns Grid */}
                        <div className="flex-grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-x-12">

                            {/* Column: Categories (Order in JSON visual seems: Categories, My Account, Register, Proxy, Helps - based on x pos) */}
                            {/* 1. Categories */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-white text-[16px] font-medium">Categories</h3>
                                <ul className="flex flex-col gap-3 text-[#D0D0D0] text-[16px]">
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">African Food</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Vegetables</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Beverages</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Frozen Food</a></li>
                                </ul>
                            </div>

                            {/* 2. My Account */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-white text-[16px] font-medium">Account</h3>
                                <ul className="flex flex-col gap-3 text-[#D0D0D0] text-[16px]">
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">My Account</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Order History</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Shopping Cart</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Wishlist</a></li>
                                </ul>
                            </div>

                            {/* 3. Register */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-white text-[16px] font-medium">Register</h3>
                                <ul className="flex flex-col gap-3 text-[#D0D0D0] text-[16px]">
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Register As a delivery person</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Register as an Agent</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Register as a Merchant</a></li>
                                </ul>
                            </div>

                            {/* 4. Proxy */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-white text-[16px] font-medium">Proxy</h3>
                                <ul className="flex flex-col gap-3 text-[#D0D0D0] text-[16px]">
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Shop</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Product</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Track Order</a></li>
                                </ul>
                            </div>

                            {/* 5. Helps */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-white text-[16px] font-medium">Helps</h3>
                                <ul className="flex flex-col gap-3 text-[#D0D0D0] text-[16px]">
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Contact</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Faqs</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Terms & Condition</a></li>
                                    <li><a href="#" className="hover:text-[#F58220] transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-[#1A1A1A] border-t border-[#333] py-6">
                <div className="max-w-[1728px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#D0D0D0] text-[16px]">RSS FOODS ©2025. All Rights Reserved</p>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-2">
                        {/* ApplePay */}
                        <div className="bg-[#1A1A1A] border border-[#333] rounded px-2 py-1 h-[32px] flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">ApplePay</span>
                        </div>
                        {/* Visa */}
                        <div className="bg-[#1A1A1A] border border-[#333] rounded px-2 py-1 h-[32px] flex items-center justify-center">
                            <span className="text-blue-500 font-bold text-xs italic">VISA</span>
                        </div>
                        {/* Discover */}
                        <div className="bg-[#1A1A1A] border border-[#333] rounded px-2 py-1 h-[32px] flex items-center justify-center">
                            <span className="text-orange-500 font-bold text-xs">DISCOVER</span>
                        </div>
                        {/* Mastercard */}
                        <div className="bg-[#1A1A1A] border border-[#333] rounded px-2 py-1 h-[32px] flex items-center justify-center">
                            <div className="flex relative">
                                <div className="w-4 h-4 rounded-full bg-red-500 opacity-80"></div>
                                <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80 -ml-2"></div>
                            </div>
                        </div>
                        {/* Secure Payment */}
                        <div className="bg-[#1A1A1A] border border-[#333] rounded px-2 py-1 h-[32px] flex items-center justify-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span className="text-white text-[10px]">Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Icons for the sidebar (SVG matches Figma JSON vector paths roughly or standard usage)
const AccountIcon = ({ active }: { active?: boolean }) => (
    <div className={`w-6 h-6 flex items-center justify-center`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "#F58220" : "#CCCCCC"} stroke="currentColor" strokeWidth="0">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    </div>
);

const OrderIcon = () => (
    <div className={`w-6 h-6 flex items-center justify-center`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCCCCC" stroke="currentColor" strokeWidth="0">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4 4zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" />
        </svg>
    </div>
);

const NotificationIcon = () => (
    <div className={`w-6 h-6 flex items-center justify-center relative`}>
        <span className="absolute top-0 right-0 text-[10px] bg-[#F58220] text-white px-1 rounded-full border border-white">2</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCCCCC" stroke="currentColor" strokeWidth="0">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
    </div>
);

const LogoutIcon = () => (
    <div className={`w-6 h-6 flex items-center justify-center`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCCCCC" stroke="currentColor" strokeWidth="0">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
        </svg>
    </div>
);

// Component matching the "Stats Card" frame
const StatsCard = ({ title, value, subtitle }: { title: string, value: string, subtitle?: string }) => (
    <div className="w-[298px] h-[93px] bg-[#FCFCFC] border border-[#F0F0F0] rounded-[10px] flex items-center px-[30px] shadow-sm">
        <div className="flex flex-col gap-1">
            <span className="text-[18px] text-[#999999] font-normal leading-tight font-sans">{title}</span>
            <span className="text-[24px] text-[#1a1a1a] font-semibold font-sans">{value}</span>
        </div>
    </div>
);

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            <TopBar />
            <MainHeader />
            <NavBar />

            <main className="w-full max-w-[1728px] mx-auto px-4 md:px-6 py-12 flex justify-center">
                <div className="flex gap-[70px]">

                    {/* LEFT SIDEBAR (Frame 2147223702) */}
                    <div className="w-[337px] flex flex-col gap-6">

                        {/* User Info Frame */}
                        <div className="bg-[#FCFCFC] border border-[#F0F0F0] rounded-[10px] w-full p-6 pb-2 min-h-[396px]">
                            {/* Name & Email */}
                            <div className="mb-8">
                                <h2 className="text-[20px] font-semibold text-[#1a1a1a] font-sans">Mfoniso Ibokette</h2>
                                <p className="text-[16px] text-[#808080] font-sans">mfonisoibokette21@gmai...</p>
                            </div>

                            {/* Links Stack */}
                            <div className="flex flex-col gap-0 border-t border-transparent">

                                {/* My Account (Active) */}
                                <div className="h-[56px] w-[330px] -ml-6 pl-[29px] flex items-center gap-[10px] bg-[#F58220]/10 border-l-[3px] border-[#F58220] cursor-pointer">
                                    <AccountIcon active />
                                    <span className="text-[16px] font-medium text-[#1a1a1a] font-sans">My Account</span>
                                </div>

                                {/* Order History */}
                                <Link href="#" className="h-[56px] w-[330px] -ml-6 pl-[29px] flex items-center gap-[10px] hover:bg-gray-50 transition-colors">
                                    <OrderIcon />
                                    <span className="text-[16px] font-normal text-[#666666] font-sans">Order History</span>
                                </Link>

                                {/* Notification */}
                                <Link href="#" className="h-[56px] w-[330px] -ml-6 pl-[29px] flex items-center gap-[10px] hover:bg-gray-50 transition-colors">
                                    <NotificationIcon />
                                    <span className="text-[16px] font-normal text-[#666666] font-sans">Notification</span>
                                </Link>

                                {/* Password */}
                                <Link href="/forgot-password" className="h-[56px] w-[330px] -ml-6 pl-[29px] flex items-center gap-[10px] hover:bg-gray-50 transition-colors">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#CCCCCC" stroke="currentColor" strokeWidth="0">
                                            <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-[16px] font-normal text-[#666666] font-sans">Password</span>
                                </Link>

                                {/* Log-out */}
                                <Link href="/signin" className="h-[56px] w-[330px] -ml-6 pl-[29px] flex items-center gap-[10px] hover:bg-gray-50 transition-colors mt-auto pt-4">
                                    <LogoutIcon />
                                    <span className="text-[16px] font-normal text-[#666666] font-sans">Log-out</span>
                                </Link>

                            </div>
                        </div>
                    </div>


                    {/* RIGHT CONTENT (Frame 2147224799) */}
                    <div className="w-[966px] flex flex-col gap-[46px]">

                        {/* Stats Row */}
                        <div className="flex items-center gap-[36px]">
                            <StatsCard title="Total" value="₦0.00" />
                            <StatsCard title="All Orders" value="0" />
                            <StatsCard title="Pending orders" value="0" />
                        </div>

                        {/* Details Row */}
                        <div className="flex gap-[28px]">

                            {/* Account Details Card */}
                            <div className="w-[424px] h-[218px] bg-white border border-[#E6E6E6] rounded-[8px] p-6 relative">
                                <h3 className="text-[14px] text-[#999999] mb-4 font-sans">Account Details</h3>
                                <div className="space-y-2">
                                    <p className="text-[14px] font-semibold text-[#1a1a1a] font-sans">Mfoniso Ibokette</p>
                                    <p className="text-[14px] text-[#666666] font-sans">mfonisoibokette21@gmail.com</p>
                                </div>
                                <div className="absolute top-[46px] left-0 w-full h-[1px] bg-[#E6E6E6]"></div>
                            </div>

                            {/* Address Book Card */}
                            <div className="w-[424px] h-[218px] bg-white border border-[#E6E6E6] rounded-[8px] p-6 relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-[14px] text-[#999999] font-sans font-medium">Address Book</h3>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <p className="text-[14px] font-semibold text-[#1a1a1a] font-sans">Mfoniso Ibokette</p>
                                    <p className="text-[14px] text-[#666666] font-sans">4140 Parker Rd. Uyo, AkwaIbom</p>
                                    <p className="text-[14px] text-[#666666] font-sans">Basumouh gas street</p>
                                    <p className="text-[14px] text-[#666666] font-sans">07036014735</p>
                                </div>

                                <div className="absolute bottom-6 left-6">
                                    <button className="text-[14px] font-medium text-[#F58220] hover:underline font-sans">
                                        Edit Address
                                    </button>
                                </div>
                                <div className="absolute top-[46px] left-0 w-full h-[1px] bg-[#E6E6E6]"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

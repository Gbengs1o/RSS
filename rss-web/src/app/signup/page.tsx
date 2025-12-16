"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // In a real app, redirect to verify or dashboard
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            {/* Navigation */}
            <TopBar />
            <MainHeader />
            <NavBar />

            <main className="flex items-center justify-center py-20 px-4 bg-gray-50">
                <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Create Account</h1>
                        <p className="text-gray-500">Join RSS Foods for the best shopping experience</p>
                    </div>

                    <form onSubmit={handleSignUp} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all bg-gray-50/50"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all bg-gray-50/50"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="080 1234 5678"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all bg-gray-50/50 pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 pt-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 mt-1 text-[#F58220] border-gray-300 rounded focus:ring-[#F58220]"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer leading-tight">
                                I agree to the <Link href="#" className="text-[#F58220] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#F58220] hover:underline">Privacy Policy</Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-[#F58220] text-white font-semibold rounded-lg hover:bg-[#e0761d] transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-[#F58220] font-semibold hover:text-[#e0761d] transition-colors">
                            Sign In
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

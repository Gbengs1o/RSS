"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2, ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
            {/* Navigation */}
            <TopBar />
            <MainHeader />
            <NavBar />

            <main className="flex items-center justify-center py-20 px-4 bg-gray-50">
                <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Forgot Password?</h1>
                                <p className="text-gray-500">Enter your email address and we&apos;ll send you a link to reset your password.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all bg-gray-50/50"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 bg-[#F58220] text-white font-semibold rounded-lg hover:bg-[#e0761d] transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending Link...
                                        </>
                                    ) : (
                                        "Send Reset Link"
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Check your email</h2>
                            <p className="text-gray-500 mb-8">
                                We've sent a password reset link to your email address.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-[#F58220] font-medium hover:underline"
                            >
                                Try another email
                            </button>
                        </div>
                    )}

                    <div className="mt-8 text-center">
                        <Link href="/signin" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

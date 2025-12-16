"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function SignInPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/profile");
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
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Welcome Back</h1>
                        <p className="text-gray-500">Sign in to your account to continue</p>
                    </div>

                    <form onSubmit={handleSignIn} className="space-y-6">
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
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <Link href="/forgot-password" className="text-sm text-[#F58220] hover:text-[#e0761d] font-medium transition-colors">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
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

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="keep-signed-in"
                                className="w-4 h-4 text-[#F58220] border-gray-300 rounded focus:ring-[#F58220]"
                            />
                            <label htmlFor="keep-signed-in" className="text-sm text-gray-600 cursor-pointer">
                                Keep me signed in
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
                                    Signing In...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-[#F58220] font-semibold hover:text-[#e0761d] transition-colors">
                            Create Account
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

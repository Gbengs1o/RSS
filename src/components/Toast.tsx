"use client";

import { useToast } from "@/context/ToastContext";

export default function Toast() {
    const { toasts, removeToast } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl backdrop-blur-md animate-slide-up
                        ${toast.type === "success" ? "bg-gradient-to-r from-green-500/95 to-emerald-600/95 text-white" : ""}
                        ${toast.type === "error" ? "bg-gradient-to-r from-red-500/95 to-rose-600/95 text-white" : ""}
                        ${toast.type === "info" ? "bg-gradient-to-r from-blue-500/95 to-indigo-600/95 text-white" : ""}
                    `}
                    style={{
                        animation: "slideUp 0.3s ease-out",
                    }}
                >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        {toast.type === "success" && (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                        {toast.type === "error" && (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                        {toast.type === "info" && (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </div>

                    {/* Message */}
                    <span className="font-medium text-[15px]">{toast.message}</span>

                    {/* Close Button */}
                    <button
                        onClick={() => removeToast(toast.id)}
                        className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}

"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[90] backdrop-blur-sm"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[95] shadow-2xl flex flex-col animate-slide-in-right">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-[#1a1a1a]">Your Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <p className="text-lg font-medium">Your cart is empty</p>
                            <p className="text-sm mt-1">Add some items to get started!</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                    {/* Image */}
                                    <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-[#1a1a1a] truncate">{item.name}</h3>
                                        <p className="text-[#F58220] font-bold mt-1">₦{item.price.toLocaleString()}</p>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" d="M20 12H4" />
                                                </svg>
                                            </button>
                                            <span className="font-semibold text-[#1a1a1a] w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="self-start p-2 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-xl font-bold text-[#1a1a1a]">₦{cartTotal.toLocaleString()}</span>
                        </div>
                        <button className="w-full py-4 bg-gradient-to-r from-[#F58220] to-[#e0761d] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all active:scale-[0.98]">
                            Checkout
                        </button>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="w-full py-3 mt-3 bg-white border border-gray-200 text-[#1a1a1a] font-medium rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

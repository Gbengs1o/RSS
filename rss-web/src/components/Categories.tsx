import React from "react";

const categories = [
    {
        name: "Grains",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Frozen Food",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Vegetables",
        image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Soft drinks",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Dairy Products",
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Seafood",
        image: "https://images.unsplash.com/photo-1615141982880-1313d06a7d87?auto=format&fit=crop&q=80&w=400"
    },
];

export default function Categories() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-[1728px] mx-auto px-4 md:px-6">
                <h2 className="text-[20px] md:text-[24px] font-medium text-[#1a1a1a] mb-6 md:mb-8 font-sans">
                    Shop with Categories
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="flex flex-col gap-3 group cursor-pointer">
                            <div className="w-full aspect-[250/259] rounded-[5px] overflow-hidden bg-gray-100 relative">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-[16px] md:text-[18px] font-medium text-[#1a1a1a] group-hover:text-[#F58220] transition-colors text-center md:text-left font-sans">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

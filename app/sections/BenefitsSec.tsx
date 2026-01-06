import { Check, X } from "lucide-react";

export default function BenefitsSection() {
    const benefits = [
        "Crafted With Care",
        "Authentic Flavors",
        "Handmade",
        "Natural Ingredients",
        "Freshness You Can Taste",
    ];

    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="bg-[#DFDFC6] rounded-[20px] p-10 h-[600px] flex justify-center items-center">
                    <img
                        src="/product-img3.png"
                        alt="Spice Bowl"
                        className="rounded-full w-[400px] h-auto object-contain"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-5xl font-semibold text-secondary  tracking-[-2]">
                        More For You
                    </h2>
                    <h3 className="text-5xl font-semibold text-primary  tracking-[-2]">
                        See The Difference
                    </h3>

                    {/* Table Header */}
                    <div className="grid grid-cols-3 mt-10 text-sm font-medium text-secondary">
                        <span>Benefits</span>
                        <span className="text-center font-Fredoka text-primary font-semibold">By Appa</span>
                        <span className="text-center">Regular One’s</span>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-primary mt-3" />

                    {/* Rows */}
                    <div className="mt-4 space-y-6">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 items-center border-b border-primary pb-4"
                            >
                                <span className="text-secondary">{item}</span>

                                {/* By Appa */}
                                <div className="flex justify-center">
                                    <div className="bg-[#DFDFC6] rounded-md p-2">
                                        <img
                                            src="/done-icon.svg"
                                            alt="Checked"
                                            className="object-center w-7 h-7"
                                        />
                                    </div>
                                </div>

                                {/* Regular Ones */}
                                <div className="flex justify-center">
                                    <img
                                        src="/cross-icon.svg"
                                        alt="Cancel"
                                        className="object-center w-7 h-7"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

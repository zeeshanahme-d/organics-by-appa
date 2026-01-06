import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Ahmed Ali",
        text: `Finally found snacks that actually taste homemade. The paneeri reminds me of what my nani used to.`,
        active: false,
    },
    {
        name: "Hamza R",
        text: `Light, crunchy, and not oily at all. The roasted makhana is now my go-to evening snack.`,
        active: true,
    },
    {
        name: "Sara M",
        text: `You can tell these are made in small batches. Fresh, simple, and honest food.`,
        active: false,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-center text-6xl font-semibold leading-tight tracking-[-4]">
                    <span className="text-[#6E775F]">Loved By </span>
                    <span className="text-[#A97442]">Families</span>
                    <br />
                    <span className="text-[#A97442]">Trusted </span>
                    <span className="text-[#6E775F]">Every Day</span>
                </h2>

                {/* Arrows */}
                <div className="flex justify-center gap-6 mt-10">
                    <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Image
                            src="/arrow-left.png"
                            alt="Golden Panjeeri"
                            width={100}
                            height={100}
                            className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                        />
                    </button>
                    <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <Image
                            src="/arrow-right-02.png"
                            alt="Golden Panjeeri"
                            width={100}
                            height={100}
                            className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                        />
                    </button>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg px-4 py-6 flex flex-col justify-between ${item.active
                                ? "bg-[#6E775F] text-white"
                                : "bg-white text-[#6E775F]"
                                }`}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className={`${item.active ? "fill-white text-white" : "fill-[#6E775F] text-[#6E775F]"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-2xl mb-4 tracking-[-1] font-normal">
                                {item.text}
                            </p>

                            <div className="border-t border-current opacity-30 mb-4" />

                            {/* Name */}
                            <span className="text-2xl tracking-[-1]">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

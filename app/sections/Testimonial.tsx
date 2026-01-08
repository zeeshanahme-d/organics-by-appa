'use client';

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Wrapper from "../components/Wrapper";

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
        name: "Hamza M",
        text: `You can tell these are made in small batches. Fresh, simple, and honest food.`,
        active: false,
    },
    {
        name: "Ali",
        text: `You can tell these are made in small batches. Fresh, simple, and honest food.`,
        active: false,
    },
    {
        name: "Zeeshan",
        text: `You can tell these are made in small batches. Fresh, simple, and honest food.`,
        active: false,
    },
];

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const slideTo = (index: number) => {
        const total = testimonials.length;
        const targetIndex = (index + total) % total;
        setActiveIndex(targetIndex);
        const slider = sliderRef.current;
        const target = slider?.children?.[targetIndex] as HTMLElement | undefined;
        if (!slider || !target) return;

        const sliderCenter = slider.clientWidth / 2;
        const targetCenter = target.offsetLeft + target.clientWidth / 2;
        const scrollLeft = targetCenter - sliderCenter;

        slider.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
    };


    useEffect(() => {
        slideTo(activeIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="py-20 md:py-32">
            <Wrapper>
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center capitalize text-primary font-semibold leading-tight tracking-[-2]">
                    <span className="text-secondary">Loved By </span>
                    <span className="text-primary">Families</span>
                    <br />
                    <span className="text-primary">Trusted </span>
                    <span className="text-secondary">Every Day</span>
                </h2>

                {/* Arrows */}
                <div className="flex justify-center gap-4 md:gap-6 mt-10">
                    <button
                        aria-label="Previous testimonial"
                        onClick={() => slideTo(activeIndex - 1)}
                        className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition"
                    >
                        <Image
                            src="/arrow-left.png"
                            alt="Golden Panjeeri"
                            width={100}
                            height={100}
                            className="w-7 h-7 sm:w-10 sm:h-10 object-contain"
                        />
                    </button>
                    <button
                        aria-label="Next testimonial"
                        onClick={() => slideTo(activeIndex + 1)}
                        className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition"
                    >
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
                <div
                    ref={sliderRef}
                    className="mt-16 flex gap-4 md:gap-6 items-stretch overflow-hidden snap-x snap-mandatory px-2 -mx-2 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {testimonials.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                className={`min-w-[75%] md:min-w-[45%] lg:min-w-[32%] snap-center rounded-lg px-4 py-6 flex flex-col justify-between transition-all duration-300 shadow-sm ${isActive ? "bg-secondary text-white scale-[1.02]" : "bg-white text-[#6E775F]"}`}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={`${isActive ? "fill-white text-white" : "fill-secondary text-secondary"}`}
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-xl sm:text-2xl mb-4 font-normal">
                                    {item.text}
                                </p>

                                <div className="border-t border-current opacity-30 mb-2" />

                                {/* Name */}
                                <span className="text-xl sm:text-2xl">{item.name}</span>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
}

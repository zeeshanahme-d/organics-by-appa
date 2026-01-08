'use client';

import { useRef, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "../components/Wrapper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Ahmed Ali",
        text: `Light, crunchy, and not oily at all. The roasted makhana is now my go-to evening snack.`,
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
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(1);

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
                        ref={prevRef}
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
                        ref={nextRef}
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

                <Swiper
                    modules={[Navigation, Pagination]}
                    loop
                    centeredSlides
                    initialSlide={activeIndex}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        if (
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== "boolean"
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    breakpoints={{
                        640: { slidesPerView: 1.3 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mt-16 px-2 -mx-2 md:mx-0 md:px-0"
                >
                    {testimonials.map((item, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <SwiperSlide key={index} className="flex">
                                {/* CARD */}
                                <div
                                    className={`h-full w-full items-stretch rounded-lg px-4 py-6 flex flex-col justify-between transition-all duration-300 shadow-sm ${isActive ? "bg-secondary text-white scale-[1.02]" : "bg-white text-[#6E775F]"}`}>
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={isActive ? "fill-white text-white" : "fill-secondary text-secondary"}
                                            />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-xl mb-6 font-normal">
                                        {item.text}
                                    </p>

                                    {/* Divider */}
                                    <div className="border-t border-current opacity-30 mb-3" />

                                    {/* Name */}
                                    <span className="text-xl font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Wrapper>
        </section>
    );
}

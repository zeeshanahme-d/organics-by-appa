import React from 'react';
import Image from 'next/image';
import Wrapper from '../components/Wrapper';
import { FaStar } from "react-icons/fa";
import AnimatedButton from '../components/AnimatedButton';



const About: React.FC = () => {
    const products = [
        { src: "/about-img1.png", alt: "Golden Panjeeri" },
        { src: "/about-img2.png", alt: "Nutty Makhana Crunch" },
        { src: "/about-img3.png", alt: "Chewy Granola Bars" },
    ];

    return (
        <section className="py-16 sm:py-24 lg:py-32" id="about">
            <Wrapper>
                <div className="text-center mb-32">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-[-1]">
                        <span className="text-primary">You Deserve </span>
                        <span className="text-secondary">The Purest Crunch.</span>
                        <br />
                        <span className="text-secondary">Golden </span>
                        <span className="text-primary">Panjeeri </span>
                        <span className="text-secondary">Boost...</span>
                        <br />
                        <span className="text-secondary">Nutty </span>
                        <span className="text-primary">Makhana </span>
                        <span className="text-secondary">Crunch...</span>
                        <br />
                        <span className="text-secondary">Chewy </span>
                        <span className="text-primary">Granola Bars</span>
                        <span className="text-secondary">...</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-16">
                    {/* Images Side */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[300px] px-4 sm:px-8 lg:px-0">
                        <div className="relative w-full max-w-[600px] flex justify-center items-center h-full">
                            {/* First Image */}
                            <div
                                className="absolute flex-1 min-w-0 max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-[250px] sm:h-[280px] md:h-[300px] inline-flex flex-col justify-end items-center border-14 border-white bg-background rotate-[-7.848deg] left-0 sm:left-1 -z-10"
                            >
                                <Image
                                    src="/about-img1.png"
                                    alt="Golden Panjeeri"
                                    width={250}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Second Image */}
                            <div
                                className="absolute flex-1 min-w-0 max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-[250px] sm:h-[280px] md:h-[300px] inline-flex flex-col justify-center items-center border-14 border-white bg-background rotate-[-1.082deg] left-1/2 -translate-x-1/2 -top-12 sm:-top-14 md:-top-52 z-10"
                            >
                                <Image
                                    src="/about-img2.png"
                                    alt="Nutty Makhana Crunch"
                                    width={250}
                                    height={300}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Third Image */}
                            <div
                                className="absolute flex-1 min-w-0 max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-[250px] sm:h-[280px] md:h-[300px] inline-flex flex-col justify-end items-center border-14 border-white bg-background rotate-8 right-0 sm:right-1 z-20"
                            >
                                <Image
                                    src="/about-img3.png"
                                    alt="Chewy Granola Bars"
                                    width={250}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Main Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold leading-tight sm:leading-[40px]">
                                <span className="text-primary">
                                    We make wholesome, natural nutrition{' '}
                                    <span className="text-secondary">simple and tasty</span>
                                    {' '}— so you can feel energized, snack smarter, and enjoy every single day.
                                </span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed sm:leading-[26px] font-medium">
                                Wholesome, golden Panjeeri made from the finest ingredients, giving you natural energy, daily vitality, and a taste you'll love.
                            </p>

                            {/* CTA Section */}
                            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-6">
                                <AnimatedButton text="Buy Now" />
                                <div className="flex w-auto items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
                                    {/* Stars */}
                                    <div className="flex gap-1 sm:gap-1.5">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary fill-secondary"
                                            />
                                        ))}
                                    </div>

                                    {/* Review Count */}
                                    <a
                                        href="#"
                                        className="text-lg sm:text-xl text-secondary font-Fredoka font-normal hover:text-[#6B7C6E] transition-colors underline decoration-2 underline-offset-4 whitespace-nowrap"
                                    >
                                        4586 reviews
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section >
    );
}

export default About;

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
        <section className="py-20 md:py-32" id="about">
            <Wrapper>
                <div className="text-center mb-10 sm:mb-32">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
                        <span className="text-primary text-3xl md:text-5xl lg:text-6xl">You Deserve </span>
                        <span className="text-secondary text-3xl md:text-5xl lg:text-6xl">The Purest Crunch.</span>
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
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[600px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[300px] px-4 sm:px-8 lg:px-0">
                        <div className="relative w-full max-w-[600px] flex justify-center items-center h-full">
                            {/* First Image */}
                            <div
                                className="absolute w-full flex-1 min-w-0 max-w-[280px] sm:max-w-[220px] md:max-w-[250px] h-[250px] sm:h-[280px] md:h-[300px] inline-flex flex-col justify-end items-center border-14 border-white bg-background rotate-[7.848deg] sm:rotate-[-7.848deg] left-1/2 -translate-x-1/2 sm:translate-x-0 -top-64 sm:-top-40 sm:left-1 -z-10"
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
                                className="absolute flex-1 min-w-0 max-w-[250px] sm:max-w-[220px] md:max-w-[250px] h-[250px] sm:h-[280px] md:h-[300px] sm:inline-flex flex-col justify-center items-center border-14 border-white bg-background rotate-[-1.082deg] left-1/2 -translate-x-1/2 -top-52 z-10 hidden"
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
                                className="absolute w-full flex-1 max-w-[280px] sm:max-w-[220px] md:max-w-[250px] h-[250px] sm:h-[280px] md:h-[300px] inline-flex flex-col justify-end items-center border-14 border-white bg-background -rotate-24 sm:rotate-8 sm:translate-0 sm:right-1 z-20 right-1/2 translate-x-1/2 top-0 sm:-top-40"
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
                            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                                <span className="text-primary">
                                    We make wholesome, natural nutrition{' '}
                                    <span className="text-secondary">simple and tasty</span>
                                    {' '}— so you can feel energized, snack smarter, and enjoy every single day.
                                </span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg sm:text-xl lg:text-2xl text-secondary leading-tight font-medium">
                                Wholesome, golden Panjeeri made from the finest ingredients, giving you natural energy, daily vitality, and a taste you'll love.
                            </p>

                            {/* CTA Section */}
                            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-6">
                                <AnimatedButton text="Buy Now" />
                                <div className="flex w-[260px] lg:w-[140px] xl:w-[260px] items-center gap-2 flex-wrap justify-center sm:justify-start">
                                    {/* Stars */}
                                    <div className="flex gap-1 sm:gap-1.5">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className="w-6 h-6 text-secondary fill-secondary"
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

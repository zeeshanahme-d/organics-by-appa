"use client"
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import { smoothScroll } from "../lib/scrollToElement";

const navData = [
    { name: 'Home', path: 'home' },
    { name: 'Shop', path: 'shop' },
    { name: 'About', path: 'about' },
    { name: 'Reviews', path: 'reviews' },
];

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-10 pb-5 relative overflow-hidden">
            <div className="absolute -left-5 md:-left-10 bottom-0 rotate-180">
                <img
                    src="/footer-logo.svg"
                    alt="Organics by Appa"
                    loading="lazy"
                    className="object-contain md:w-32 md:h-32 w-24 h-24"
                />
            </div>

            <div className="absolute -right-5 md:-right-10 top-0 rotate-0">
                <img
                    src="/footer-logo.svg"
                    alt="Organics by Appa"
                    loading="lazy"
                    className="object-contain md:w-32 md:h-32 w-24 h-24"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center space-y-8">
                {/* Logo */}
                <div className="">
                    <Image
                        src="/footer-logo2.svg"
                        alt="Organics by Appa"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-x-10">
                    {navData.map((link) => (
                        <button
                            key={link.path}
                            onClick={() => smoothScroll(link.path)}
                            className="relative text-white font-medium text-xl font-Fredoka
                                           after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] 
                                           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="md:w-12 md:h-12 w-10 h-10 border border-white rounded-full flex items-center justify-center"
                    >
                        <FiInstagram color="#fff" className="md:w-6 md:h-6 w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="md:w-12 md:h-12 w-10 h-10 border border-white rounded-full flex items-center justify-center"
                    >
                        <FiFacebook color="#fff" className="md:w-6 md:h-6 w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="md:w-12 md:h-12 w-10 h-10 border border-white rounded-full flex items-center justify-center"
                    >
                        <FaXTwitter color="#fff" className="md:w-6 md:h-6 w-5 h-5" />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-[90%] max-w-6xl border-t border-dashed border-white mt-3 md:mt-5" />

                {/* Copyright */}
                <p className="text-sm md:text-base font-light ">
                    © 2026 organicsbyappa. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

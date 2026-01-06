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
            {/* Faded background logos (optional decorative circles) */}
            <div className="absolute left-0 bottom-0 rotate-180">
                <Image
                    src="/footer-logo.svg"
                    alt="Organics by Appa"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>

            <div className="absolute right-0 top-0 rotate-0">
                <Image
                    src="/footer-logo.svg"
                    alt="Organics by Appa"
                    width={100}
                    height={100}
                    className="object-contain"
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
                        className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
                    >
                        <FiInstagram size={24} color="#fff" />
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
                    >
                        <FiFacebook size={24} color="#fff" />
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
                    >
                        <FaXTwitter size={24} color="#fff" />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full max-w-6xl border-t border-dashed border-white mt-5" />

                {/* Copyright */}
                <p className="text-base m-0!">
                    © 2026 organicsbyappa. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

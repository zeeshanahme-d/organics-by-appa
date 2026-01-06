"use client"
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Hamburger from "hamburger-react";
import { smoothScroll } from "../lib/scrollToElement";

const navData = [
    { name: 'Home', path: 'home' },
    { name: 'Shop', path: 'shop' },
    { name: 'About', path: 'about' },
    { name: 'Reviews', path: 'reviews' },
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <Wrapper>
                <div className="flex justify-between items-center h-28">
                    {/* Logo */}
                    <a href="/" className="shrink-0">
                        <Image
                            src="/logo.svg"
                            alt="Organics by Appa"
                            width={75}
                            height={75}
                            className="object-contain"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-x-10">
                        {navData.map((link) => (
                            <button
                                key={link.path}
                                onClick={() => smoothScroll(link.path)}
                                className="relative text-primary font-medium text-xl font-Fredoka
                                           after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] 
                                           after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-x-4">
                        {/* Cart Icon */}
                        <button className="md:block hidden">
                            <Image
                                src="/shopping-basket.svg"
                                alt="Cart"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </button>

                        {/* Mobile Menu Toggle */}
                        {/* Cart Icon */}
                        <button className="md:hidden">
                            <Hamburger
                                rounded
                                size={30}
                                duration={0.2}
                                easing="ease-in-out"
                                toggled={menuOpen}
                                toggle={setMenuOpen}
                                color="#9C7346"
                            />
                        </button>
                    </div>
                </div>
            </Wrapper>

            {/* Mobile Menu */}
            <div className={`bg-background w-full transition-all duration-500 ${menuOpen ? "block" : "hidden pointer-events-none"}`}>
                <div className="flex flex-col space-y-4 py-5 px-6">
                    {navData.map((link) => (
                        <button
                            key={link.path}
                            onClick={() => { setMenuOpen(false); smoothScroll(link.path); }}
                            className="text-dark text-start font-medium py-1 hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;

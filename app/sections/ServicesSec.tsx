import React, { JSX } from 'react';
import Wrapper from '../components/Wrapper';

import { FaShieldAlt, FaBell, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Image from 'next/image';

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: JSX.Element;
    gradient: string;
    className?: string;
}

const servicesData: any[] = [
    {
        id: 1,
        price: 1200,
        title: "Panjeeri",
        description:
            "Browse verified listings for rent or sale. Filter by location, price, and property type to find your perfect match.",
        link: "#",
        icon: <Image
            src="/product-img.png"
            alt="Golden Panjeeri"
            width={100}
            height={100}
            className="w-auto h-auto relative left-28 -top-20"
        />,
        className: "",
    },
    {
        id: 2,
        price: 1200,
        title: "Panjeeri",
        description:
            "Browse verified listings for rent or sale. Filter by location, price, and property type to find your perfect match.",
        link: "#",
        icon: <Image
            src="/product-img.png"
            alt="Golden Panjeeri"
            width={100}
            height={100}
            className="w-auto h-auto absolute left-28 -top-30"
        />,
        className: "",
    },
    {
        id: 3,
        price: 1200,
        title: "Panjeeri",
        description:
            "Browse verified listings for rent or sale. Filter by location, price, and property type to find your perfect match.",
        link: "#",
        icon: <Image
            src="/product-img.png"
            alt="Golden Panjeeri"
            width={100}
            height={100}
            className="w-auto h-auto absolute left-28 -top-30"
        />,
        className: "",
    },
];

const productNames = ["Golden Panjeeri", "Nutty Makhana", "Granola bars"];

// Multiplied for seamless looping
const scrollList = [...productNames, ...productNames, ...productNames, ...productNames];

const Services: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 lg:py-32" id='services'>

            <Wrapper>
                {/* <!-- Section Header --> */}
                <div className="text-center mb-52">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl capitalize text-primary font-semibold leading-tight tracking-[-4.5]">
                        Three Ways to <span className='text-secondary'>Snack</span> Smarter
                    </h2>
                </div>

                {/* <!-- Services Grid --> */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((item) => (
                        <div
                            key={item.id}
                            className={`group bg-[#CAB69A36] rounded-4xl p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${item.className}`}
                        >
                            <div
                                className="rounded-xl w-[150px] h-[120px] relative flex items-center justify-center mb-6 "
                            >
                                {item.icon}
                            </div>

                            <div className="flex gap-1.5">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="w-5 h-5 text-secondary fill-secondary"
                                    />
                                ))}
                            </div>

                            <div className='my-4 flex items-center justify-between'>
                                <h2 className="text-secondary text-3xl font-medium">
                                    {item.title}
                                </h2>
                                <h2 className="text-primary text-3xl font-medium">
                                    RS {item.price}
                                </h2>
                            </div>

                            <a
                                href={item.link}
                                className="flex w-full h-12 p-2.5 justify-center items-center rounded-full bg-white text-primary font-semibold hover:gap-2 transition-all"
                            >
                                Buy Now
                            </a>
                        </div>
                    ))}
                </div>
            </Wrapper>

            <div className="relative w-full py-8 mt-32 bg-secondary overflow-hidden">
                <div className="animate-infinite-scroll">
                    {scrollList.map((name, index) => (
                        <div key={index} className='flex items-center'>
                            <span className="text-5xl md:text-5xl font-Fredoka font-semibold text-white mx-12 whitespace-nowrap">
                                {name}
                            </span>
                            {/* Dot Separator */}
                            <div className="w-6 h-6 mt-1 rounded-lg bg-white" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;
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
            width={150}
            height={180}
            className="w-full max-w-[140px] sm:max-w-[150px] lg:max-w-[180px] h-auto object-contain"
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
            width={150}
            height={180}
            className="w-full max-w-[140px] sm:max-w-[150px] lg:max-w-[180px] h-auto object-contain"
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
            width={150}
            height={180}
            className="w-full max-w-[140px] sm:max-w-[150px] lg:max-w-[180px] h-auto object-contain"
        />,
        className: "",
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-20" id='services'>

            <Wrapper>
                {/* <!-- Section Header --> */}
                <div className="text-center lg:mb-52 mb-40">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize text-primary font-semibold">
                        Three Ways to <span className='text-secondary'>Snack</span> Smarter
                    </h2>
                </div>

                {/* <!-- Services Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-40 gap-8">
                    {servicesData.map((item) => (
                        <div
                            key={item.id}
                            className={`group bg-[#CAB69A36] rounded-4xl p-6 xl:p-8 transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${item.className}`}
                        >
                            <div
                                className="rounded-xl w-full flex items-center justify-center mb-4 -mt-28 md:-mt-36"
                            >
                                {item.icon}
                            </div>

                            <div className="flex gap-1.5 mt-8">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-secondary fill-secondary"
                                    />
                                ))}
                            </div>

                            <div className='my-4 flex items-center justify-between gap-2'>
                                <h2 className="text-secondary text-xl sm:text-2xl lg:text-3xl font-medium">
                                    {item.title}
                                </h2>
                                <h2 className="text-primary text-xl sm:text-2xl lg:text-3xl font-medium whitespace-nowrap">
                                    RS {item.price}
                                </h2>
                            </div>

                            <a
                                href={item.link}
                                className="flex w-full h-12 p-2.5 hover:bg-primary hover:text-white duration-300 justify-center items-center rounded-full bg-white text-primary font-semibold hover:gap-2 transition-all mt-auto"
                            >
                                Buy Now
                            </a>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}

export default Services;
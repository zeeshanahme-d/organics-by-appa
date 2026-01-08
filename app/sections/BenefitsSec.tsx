import { Check, X } from "lucide-react";
import Wrapper from "../components/Wrapper";

export default function BenefitsSection() {
    const benefits = [
        "Crafted With Care",
        "Authentic Flavors",
        "Handmade",
        "Natural Ingredients",
        "Freshness You Can Taste",
    ];

    return (
        <section className="bg-white py-20 relative">
            <div className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 -top-8 bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full ">
                <img
                    src="/emoji-icon.svg"
                    alt="Emoji"
                    loading='lazy'
                    className="object-center w-12 h-12 sm:w-14 sm:h-14"
                />
            </div>
            <Wrapper>
                <div className="flex flex-col lg:flex-row justify-between gap-y-16 lg:gap-12 items-center">
                    {/* Content Section - Order changes on mobile */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary tracking-[-2]">
                            More For You
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-[-2]">
                            See The Difference
                        </h3>

                        {/* Table Header */}
                        <div className="grid grid-cols-3 mt-6 lg:mt-10 text-xs sm:text-sm font-medium text-secondary">
                            <span>Benefits</span>
                            <span className="text-center font-Fredoka text-primary font-semibold">By Appa</span>
                            <span className="text-center">Regular One's</span>
                        </div>

                        {/* Divider */}
                        <div className="border-b border-primary mt-3" />

                        {/* Rows */}
                        <div className="">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 items-center border-b border-primary py-3 lg:py-6 xl:py-8"
                                >
                                    <span className="text-secondary text-sm sm:text-base">{item}</span>

                                    {/* By Appa */}
                                    <div className="flex justify-center">
                                        <div className="bg-[#DFDFC6] rounded-md p-1.5 sm:p-2">
                                            <img
                                                loading='lazy'
                                                src="/done-icon.svg"
                                                alt="Checked"
                                                className="object-center w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                                            />
                                        </div>
                                    </div>

                                    {/* Regular Ones */}
                                    <div className="flex justify-center">
                                        <img
                                            loading='lazy'
                                            src="/cross-icon.svg"
                                            alt="Cancel"
                                            className="object-center w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section - Order changes on mobile */}
                    <div className='sm:h-[650px] xl:h-[900px] lg:h-[800px] w-full lg:w-1/2 order-2 lg:order-1 flex-centered'>
                        <div className="w-full h-full flex-centered rounded-[20px] relative">
                            <img
                                loading='lazy'
                                src="/benefits-sec-img.jpg"
                                alt="Spice Bowl"
                                className="w-full h-full object-contain"
                            />
                            <img
                                loading='lazy'
                                src="/product-img3.png"
                                alt="Spice Bowl"
                                className="-[200px] sm:w-[300px] lg:w-[400px] absolute object-contain -mt-8 lg:mt-0"
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

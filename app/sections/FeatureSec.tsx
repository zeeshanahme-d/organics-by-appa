import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";

export default function FeatureSection() {
    return (
        <section className="relative bg-white py-32 overflow-hidden">
            <img
                src="/pistachios.png"
                alt="Left decoration"
                className="absolute left-0 top-1/3 -translate-y-1/2 w-36 hidden md:block"
            />

            <img
                src="/almond-blur.png"
                alt="Right decoration"
                className="absolute right-0 bottom-20 hidden w-36 md:block"
            />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Center Image */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/product-img2.png"
                        alt="Product"
                        className="rounded-full w-[300px] object-center"
                    />
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-[-2] mb-6">
                    <span className="text-secondary">100% </span>
                    <span className="text-primary">HONEST</span>
                    <br />
                    <span className="text-secondary">100% </span>
                    <span className="text-primary">HOMEMADE</span>
                </h2>

                {/* Description */}
                <p className="text-secondary max-w-4xl mx-auto text-sm md:text-xl tracking-[-1] leading-relaxed mb-10">
                    We put time, real ingredients, and a lot of care into everything we make.
                    <br />
                    If you're not fully satisfied — for any reason — reach out.
                    <br />
                    We stand behind our food, every single time.
                </p>

                {/* Button */}
                <div className="flex justify-center">
                    <AnimatedButton text="Order Now" />
                </div>
            </div>
        </section>
    );
}

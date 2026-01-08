import AnimatedButton from "../components/AnimatedButton";
import Wrapper from "../components/Wrapper";

export default function FeatureSection() {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <img
                src="/pistachios.png"
                alt="Left decoration"
                className="absolute left-0 top-1/3 -translate-y-1/2 w-24 hidden md:block"
            />

            <img
                src="/pistachio-unblure-img.png"
                alt="Right decoration"
                className="absolute right-0 top-0 w-16"
            />

            <img
                src="/almond-unblure-img.png"
                alt="Right decoration"
                className="absolute left-0 -bottom-6 w-10"
            />

            <img
                src="/almond-blur.png"
                alt="Right decoration"
                className="absolute right-0 bottom-20 hidden w-20 md:block"
            />

            {/* Main Content */}
            <Wrapper>
                <div className="text-center">
                    {/* Center Image */}
                    <div className="flex justify-center mb-10">
                        <img
                            src="/product-img2.png"
                            alt="Product"
                            className="md:w-[300px] w-[250px] object-center"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight tracking-[-2] mb-6">
                        <span className="text-secondary">100% </span>
                        <span className="text-primary">HONEST</span>
                        <br />
                        <span className="text-secondary">100% </span>
                        <span className="text-primary">HOMEMADE</span>
                    </h2>

                    {/* Description */}
                    <p className="text-secondary max-w-4xl mx-auto text-base md:text-xl tracking-[-1] leading-relaxed mb-10">
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
            </Wrapper>
        </section>
    );
}

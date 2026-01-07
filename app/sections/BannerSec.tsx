import React from 'react'
import Wrapper from '../components/Wrapper';
import AnimatedButton from '../components/AnimatedButton';


const Banner: React.FC = () => {
    return (
        <section className='py-10 md:pt-10 pt-0 overflow-hidden relative' id="banner">

            <Wrapper>
                <div className="flex justify-center flex-col">
                    <div className='w-full flex justify-center'>
                        <img
                            src="/banner-text1.png"
                            alt="Organics by Appa"
                            className="object-contain w-auto sm:w-[500px] lg:w-[700px] h-auto"
                        />
                    </div>
                    <div className="flex justify-center mt-10 md:mt-5">
                        <AnimatedButton text="Explore Products" />
                    </div>
                    <div className='mt-5 md:mt-2 2xl:mt-2 w-full flex justify-between items-center lg:flex-row flex-col gap-10'>
                        <div className="w-auto max-w-[600px] md:w-[600px] lg:w-[900px] xl:max-w-full">
                            <img src="/banner-img.png" className='w-full h-auto' />
                        </div>
                        <div className='lg:max-w-[400px] max-w-[400px] xl:max-w-[480px] text-center justify-start'>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold">
                                <span className="text-secondary">
                                    Real food{' '}
                                    <span className="text-primary">Made the way Appa would</span>
                                </span>
                            </h1>

                            <p className="text-lg mt-10 sm:text-xl md:text-2xl xl:text-2xl text-secondary leading-tight font-medium">
                                Traditional recipes, clean ingredients, and zero shortcuts crafted for everyday nourishment.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>

        </section>
    )
}

export default Banner;

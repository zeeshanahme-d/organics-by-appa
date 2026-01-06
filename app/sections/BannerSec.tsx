import React from 'react'
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
//icons
import { FaApple, FaLock } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdVerifiedUser, MdHome, MdGroups2 } from "react-icons/md";
import AnimatedButton from '../components/AnimatedButton';




const Banner: React.FC = () => {
    return (
        <section className='mt-0' id="banner">
            <div className='py-16 overflow-hidden'>
                <Wrapper>
                    <div className="flex justify-center flex-col">
                        <div className='w-full flex justify-center'>
                            <img
                                src="/banner-text1.png"
                                alt="Organics by Appa"
                                className="object-contain w-auto h-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <AnimatedButton text="Explore Products" />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </section>
    )
}

export default Banner;

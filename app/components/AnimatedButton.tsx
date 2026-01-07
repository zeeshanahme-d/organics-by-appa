import React from 'react';
import Image from 'next/image';

type AnimatedButtonProps = {
    /**
     * Button text content
     * @default "Explore products"
     */
    text?: string;
    /**
     * Button variant - "Frame 10" (default, horizontal) or "Frame 11" (rotated)
     * @default "Frame 10"
     */
    variant?: "Frame 10" | "Frame 11";
    /**
     * Enable rotation animation on hover (only applies to Frame 10 variant)
     * @default false
     */
    animated?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional className for additional styling on the root button element
     */
    className?: string;
    /**
     * Optional custom inline styles for the root button element
     */
    style?: React.CSSProperties;
    /**
     * Optional className for the button text container
     */
    textClassName?: string;
    /**
     * Optional custom inline styles for the button text container
     */
    textStyle?: React.CSSProperties;
    /**
     * Custom icon source path
     * @default "/arrow-right.svg"
     */
    iconSrc?: string;
    /**
     * Icon alt text
     * @default "Arrow icon"
     */
    iconAlt?: string;
    /**
     * Disable the button
     * @default false
     */
    disabled?: boolean;
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    text = "Explore products",
    variant = "Frame 10",
    animated = true,
    onClick,
    className = "",
    style,
    textClassName = "",
    textStyle,
    iconSrc = "/arrow-right.svg",
    iconAlt = "Arrow icon",
    disabled = false
}) => {
    const isFrame10 = variant === "Frame 10";
    const isFrame11 = variant === "Frame 11";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`relative w-[270px] h-[56px] group transition-all duration-300 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
            style={style}
        >
            {isFrame10 && (
                <div
                    className={`absolute flex items-center justify-center bg-secondary group-hover:bg-primary text-background h-[56px] p-[10px] rounded-full w-[200px] left-[calc(50%+25px)] translate-x-[-50%] top-0 transition-all duration-300 group-hover:translate-x-[-158px] group-hover:-rotate-14 ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${textClassName}`}
                    style={textStyle}
                >
                    <p
                        className="font-medium text-base lg:text-xl leading-normal shrink-0"
                    >
                        {text}
                    </p>
                </div>
            )}

            {/* Icon Container */}
            <div
                className={`absolute size-[56px] pointer-events-none bg-secondary rounded-full transition-all duration-300 group-hover:bg-primary flex items-center justify-center ${isFrame10 ? "left-0 top-0" : ""} ${animated ? "group-hover:translate-x-[195px] group-hover:translate-y-[10px]" : ""}`}
            >
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={48}
                    height={48}
                    className="block max-w-none lg:w-12 lg:h-12 w-8 h-8 object-contain"
                />
            </div>
        </button>
    );
};

export default AnimatedButton;


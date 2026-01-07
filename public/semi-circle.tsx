import React from "react";

const SemiCircleText = ({ className }: any) => {
    return (
        <div className={className}>
            <svg
                viewBox="0 -50 1000 400"
                preserveAspectRatio="none"
                className="block w-screen"
            >
                {/* Background Arc */}
                <path
                    id="curve"
                    d="M 0 200 Q 500 -100 1000 200"
                    fill="none"
                    stroke="#6D755E"
                    strokeWidth="140"
                    strokeLinecap="square"
                />

                {/* Text */}
                <text
                    fill="white"
                    fontSize="60"
                    fontWeight="600"
                    fontFamily='Fredoka'
                    letterSpacing="10"
                    dominantBaseline="middle"
                >
                    <textPath
                        href="#curve"
                        startOffset="50%"
                        textAnchor="middle"
                    >
                        • Organics By Appa •
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default SemiCircleText;

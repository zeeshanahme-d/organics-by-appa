import { ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

export default function Wrapper({ children, className = '' }: WrapperProps) {
    return (
        <div className={`m-auto w-full px-4 sm:px-6 lg:px-8  max-w-[1440px] ${className}`}>
            {children}
        </div>
    );
}
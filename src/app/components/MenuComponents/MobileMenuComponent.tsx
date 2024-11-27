"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

const MobileMenuComponent = () => {
    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 40);
        }
        window.addEventListener('scroll', handleScroll);
    });
    return (
        <div className={`flex flex-row justify-between items-center p-4 text-whit mobile-menu-bar ${shadow && 'shadow'}`}>
            <div className="flex flex-row items-center">
                <Image
                    src={`/20240615_191036.png`}
                    alt={''}
                    width={50}
                    height={50}
                    className={`rounded-full`}
                    />
                <div className="ml-4">
                    <h1 className="text-lg font-semibold">Charles Rogers</h1>
                    <h4 className="text-sm">Software Engineer</h4>
                    <p className="text-xs">Phoenix, AZ</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
            </div>
        </div>
    );
}

export default MobileMenuComponent;
"use client"
import { useState, useEffect } from 'react';
import styles from './componentStyles/components.module.css';

const MobileMenuComponent = () => {
    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShadow(window.scrollY > 40);
        }
        window.addEventListener('scroll', handleScroll);
    });
    return (
        // small tailwind titlebar including name, title, location on left
            <div className={`flex flex-row justify-between items-center p-4 text-whit mobile-menu-bar ${shadow && 'shadow'}`}>
                <div className="flex flex-row items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Charles Rogers"
                        className="rounded-full h-10 w-10"
                    />
                    <div className="ml-2">
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
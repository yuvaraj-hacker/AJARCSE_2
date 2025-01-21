import React, { useEffect, useRef } from 'react';

const HeroSections = ({ isActive, activeText, defaultText }) => {
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (!isMobile) {
            const handleScroll = () => {
                let value = window.scrollY;
                const container = containerRef.current;
                if (imageRef.current && container) {
                    const containerRect = container.getBoundingClientRect();
                    if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
                        imageRef.current.style.marginTop = `${value * 9.5}px`;
                    }
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);
    return (
        <>
            <section className="bg-[#388883]">
                <div className="relative bg-[url('/images/Herosection/advce.jpg')] bg-cover bg-center w-full md:rounded-t-[3.5rem] rounded-t-[2rem]">
                    {/* Greenish Overlay */}
                    <div className="absolute inset-0 bg-green-900 opacity-55 md:opacity-65 rounded-t-[2rem] md:rounded-t-[3.5rem]"></div>

                    <div className="max-w-[80rem] mx-auto px-5 relative z-10">
                        <div className="grid md:grid-cols-2">
                            <div className="text-white my-10">
                                <p className="flex justify-center items-center px-2 font-bold text-white md:text-3xl">
                                    American Journal of Advanced Research in Computer Science & Engineering (AJARCSE)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSections;







import React, { useEffect, useRef, useState } from 'react'
import HeroSection from '../Home/HeroSection';

function Aboutus() {
    const [isActive, setIsActive] = useState(true);

    return (
        <>
            <HeroSection
                backgroundImage="/images/Herosection/ground.jpg"
                text=" AJARCSE publishes periodic issues featuring peer-reviewed research articles, reviews, and case studies across various fields of computer science and engineering, ensuring the dissemination of cutting-edge knowledge and advancements.
  "  />
            <section className="  mx-auto ">
                <div className="relative overflow-hidden bg-white md:h-[50vh]">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 right-0 w-1/2  "></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-14 py-7">
                        <div className="text-center mb-12">
                            <div className='flex justify-center gap-3 items-center'>
                                <div className='w-1 h-8 bg-[#1B356F]  '>
                                </div>
                                <h2 className="md:text-3xl text-xl font-bold text-gray-800  ">Issues</h2>
                            </div>

                            <p className="mt-20 text-center">Will be Updated Soon...</p>
                            {/* <div className="relative">

                                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
                            </div> */}
                            {/* <div className="max-w-full w-full ">

                                <div className='grid  grid-flow-row grid-cols-2 mt-5 md:gap-8 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                                    <div className=' min-h-52 '>
                                        <h1 className=' text-black p-2 pl-5 mb-2'>2024</h1>
                                        <ul className='list-disc pl-5'>
                                            <li><a href="#" className='text-[#4b2d8b] underline'>Volume 1  Issue 1</a></li>
                                        </ul>
                                    </div>


                                </div>



                            </div> */}
                        </div>


                    </div>
                </div>

            </section>
        </>
    )
}
export default Aboutus


import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../Home/HeroSection';
 
function Aboutus() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
       <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text="Publication ethics are the principles and standards that guide the behavior of authors, editors, peer reviewers, and publishers to ensure integrity, transparency, and accountability in the publication process."
      />
      <section className="  mx-auto">
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-14">
            <div className="text-center mb-12">
              <div className='flex justify-center gap-3 items-center'>
                <div className='w-1 h-8 bg-[#1B356F]  '>

                </div>
                <h2 className="text-3xl font-bold text-gray-800  ">Publication Ethics</h2>
              </div>

              <div className="relative">

                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
              </div>
              <ul className='md:mt-8 mt-4 list-disc list-outside  px-3 md:text-base text-sm text-justify'>
                <li>All articles in the International Journal of Advanced Research in Information Technology and Management Science (AJARCSE) journals are of Open Access (OA).</li>
                <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
                <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
              </ul>
            </div>


          </div>
        </div>
        <section className=" ">
          <section className=" ">


          </section>
          {/* <section className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section> */}
        </section>
      </section>
    </>
  )
}
export default Aboutus
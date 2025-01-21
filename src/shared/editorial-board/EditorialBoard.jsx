import React, { useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../Home/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>

      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text=" The Editorial Board of AJARCSE comprises leading scholars and experts dedicated to advancing research
          in computer science and engineering. We ensure rigorous peer review, uphold academic integrity, and foster
          innovation across emerging technologies.  "  />
      <section className="  mx-auto   ">
        <section className=" ">
          <section className=" ">
            <section className="">
              <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0">
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-14">
                  <div className="text-center mb-12">
                    <div className='flex justify-center gap-3 items-center'>
                      <div className='w-1 h-8 bg-[#1B356F]  '>

                      </div>
                      <h2 className="text-3xl font-bold text-gray-800  ">Editorial Board</h2>
                    </div>
                    <div className="relative">

                      <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                      <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
                    </div>
                    <div className="text-center  md:text-base text-sm  mt-10">
                      Update Will Come Soon.......
                    </div>
                  </div>


                </div>
              </div>
              {/* <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="  p-2   bg-white">
                      <p className="text-center md:text-2xl text-lg">Editorial Board</p>

                      <div className='mx-auto mt-4 '>
                        <img className='w-96 mx-auto rounded-3xl' src="/images/Herosection/editorial.jpeg" alt="" />
                      </div>
                      <div className="text-center h-40 mt-10">
                        Update Will Come Soon.......
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>
          </section>

        </section>
      </section>
    </>
  )
}
export default Aboutus
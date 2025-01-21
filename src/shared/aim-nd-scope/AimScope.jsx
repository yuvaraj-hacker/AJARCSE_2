

import React, { useState } from 'react'
import HeroSection from '../Home/HeroSection';


function Aboutus() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>

      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text="      AJARCSE aims to publish high-quality research in computer science and engineering, covering areas like AI, cybersecurity, data science, software engineering, and emerging technologies, fostering innovation and interdisciplinary collaboration.
  "  />
      <section className="  mx-auto">
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-14 py-7">
            <div className="text-center mb-12">
              <div className='flex justify-center gap-3 items-center'>
                <div className='w-1 h-8 bg-[#1B356F]  '>

                </div>
                <h2 className="text-3xl font-bold text-gray-800  ">Aim and Scope</h2>
              </div>
              <div className="relative">

                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
              </div>
              <div className="max-w-full w-full">
                <h1 className="font-semibold md:text-2xl text-xl mb-2 md:mt-8 mt-4">Aim</h1>
                <h1 className="  mb-3  text-justify leading-loose md:text-base text-sm">International Journal of Advanced Research in Information Technology and
                  Management Science is an online open access journal, basically the aim of this journal to promote the
                  new Innovative ideas in all fields of Engineering and Technology. Basically, this Journal will help to
                  promote all Innovations in Engineering and Technology on one platform so that if anybody wants to
                  integrate their ideas with other field of technology, they can implement it with the help of this
                  Journal.</h1>
                <h1 className="font-semibold  md:text-2xl text-xl md:mt-8 mb-2">Scope</h1>
                <h1 className="  text-justify leading-loose md:text-base text-sm">The scope of the AJARCSE is to provide an academic medium and an important
                  reference for the advancement and dissemination of research results that support high-level learning,
                  teaching and research in the fields of engineering, science and technology. Original theoretical work
                  and application-based studies, which contributes to a better understanding of engineering, science and
                  technological challenges, are encouraged.</h1>
              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  )
}

export default Aboutus
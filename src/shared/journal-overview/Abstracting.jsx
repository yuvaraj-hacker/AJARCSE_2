import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../Home/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text="Abstracting and indexing enhance the visibility and accessibility of research by listing articles in reputable databases. This improves discoverability, citation impact, and academic recognition."
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
                <h2 className="text-3xl font-bold text-gray-800  ">Abstracting and Indexing</h2>
              </div>
              <div className="relative">

                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
              </div>
              <p className="md:mt-8 mt-4 md:text-base text-sm ">Selected  AJARCSE will be indexed in all major indexing services, including Web of Science, Scopus, EBSCO, ProQuest, CNKI, DBLP, Google Scholar, Microsoft Academic Search, OCLC Discovery Services, DOAJ, Elektronische Zeitschriftenbibliothek, CrossRef, and others soon.</p>

            </div>


          </div>
        </div>

      </section>
    </>
  )
}
export default Aboutus
import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../Home/HeroSection';
import Design from './Design';
import { BarChart, Database, Search } from 'lucide-react';
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
            <div className="absolute inset-y-0 right-0 w-1/2  "></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-14">
            <div className="text-center md:mb-12 mb-6">


              <Design topic="Abstracting and Indexing" />
              {/* <div className="relative">

                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
              </div> */}
              <p className="md:mt-8 mt-4 md:text-base text-sm ">Selected  AJARCSE will be indexed in all major indexing services, including Web of Science, Scopus, EBSCO, ProQuest, CNKI, DBLP, Google Scholar, Microsoft Academic Search, OCLC Discovery Services, DOAJ, Elektronische Zeitschriftenbibliothek, CrossRef, and others soon.</p>

            </div>

            <section className='max-w-[30rem] mx-auto px-4  '>
              <div className="grid md:grid-cols-1 md:gap-8 gap-4 md:mb-12 mb-6">
                <div className="  rounded-bl-3xl p-6 text-center shadow-md">
                  <Search className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="md:text-xl font-semibold mb-2">Global Visibility</h3>
                  <p className="text-gray-600 md:text-base text-sm">Indexed in major international databases</p>
                </div>
                <div className="  rounded-bl-3xl p-6 text-center shadow-md">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="md:text-xl font-semibold mb-2">Full Coverage</h3>
                  <p className="text-gray-600 md:text-base text-sm">Complete metadata and full-text indexing</p>
                </div>
                <div className="  rounded-bl-3xl p-6 text-center shadow-md">
                  <BarChart className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="md:text-xl font-semibold mb-2">Citation Tracking</h3>
                  <p className="text-gray-600 md:text-base text-sm">Comprehensive impact monitoring</p>
                </div>
              </div>
            </section>
          </div>
        </div>

      </section>
    </>
  )
}
export default Aboutus
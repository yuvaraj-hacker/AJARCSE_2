

import React, { useState } from 'react'
import HeroSection from '../Home/HeroSection';
import { GiExpand } from 'react-icons/gi';
import { FaBullseye } from 'react-icons/fa';
import Design from '../journal-overview/Design';


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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-14 py-7">
            <div className="text-center md:mb-12">
              <div className='flex justify-center gap-3 items-center'>
                <div className='w-1 h-8 bg-[#1B356F]'>
                </div>
                <h2 className="md:text-3xl text-xl font-bold text-gray-800  ">Aim and Scope</h2>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
              </div>


              <div className="max-w-[70rem] mx-auto px-4">

                <div className="grid md:grid-cols-2 grid-cols-1 my-5 gap-10">
                  {/* Aim Card */}
                  <div className="bg-white p-8 rounded-bl-3xl shadow-md  md:bg-gradient-to-l from-blue-50/50 to-blue-100/50    transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div>
                        <FaBullseye className="text-[#1B356F] md:text-3xl text-xl mr-3" />
                      </div>
                      <h3 className="md:text-2xl  font-semibold text-[#1B356F]  ">
                        Aim of the Journal
                      </h3>
                    </div>
                    <p className="text-gray-700 md:text-base text-sm">
                      The American Journal of Advanced Research in Computer Science &
                      Engineering (AJARCSE) aims to publish cutting-edge research that
                      contributes to the advancement of computer science and engineering.
                      The journal focuses on delivering groundbreaking research in areas
                      like AI, machine learning, blockchain, cybersecurity, and more.
                    </p>
                  </div>

                  {/* Scope Card */}
                  <div className="bg-white p-8 rounded-bl-3xl shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div>
                        <GiExpand className="text-[#1B356F] md:text-3xl text-xl mr-3" />
                      </div>
                      <h3 className="md:text-2xl font-semibold text-[#1B356F]  ">
                        Scope of the Journal
                      </h3>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 md:text-base text-sm">
                      <li>Artificial Intelligence & Machine Learning</li>
                      <li>Blockchain & Fintech Innovations</li>
                      <li>Cybersecurity & Data Protection</li>
                      <li>Cloud & Edge Computing Technologies</li>
                      <li>Robotics & Automation Systems</li>
                      <li>Smart Cities & IoT Integration</li>
                      <li>Quantum Computing & Cryptography</li>
                      <li>5G Networks & Future Communication</li>
                      <li>Green Computing & Sustainability</li>
                      <li>Data Science & Big Data Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  )
}

export default Aboutus


// import React from "react";
// import Design from "../journal-overview/Design";
// import HeroSection from "../Home/HeroSection";
// import { FaBullseye } from "react-icons/fa";
// import { GiExpand } from "react-icons/gi";

// const Aboutus = () => {
//   return (
//     <>
//       <HeroSection
//         backgroundImage="/images/Herosection/ground.jpg"
//         text=" The Editorial Board of AJARCSE comprises leading scholars and experts dedicated to advancing research
//       in computer science and engineering. We ensure rigorous peer review, uphold academic integrity, and foster
//       innovation across emerging technologies.  "  />
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-[70rem] mx-auto px-4">
//           <Design topic="Aim and Scope" />
//           <div className="grid md:grid-cols-2 grid-cols-1 my-5 gap-10">
//             {/* Aim Card */}
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center gap-3 mb-4">
//                 <div>
//                   <FaBullseye />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-[#1B356F]  ">
//                   Aim of the Journal
//                 </h3>
//               </div>
//               <p className="text-gray-700 text-base">
//                 The American Journal of Advanced Research in Computer Science &
//                 Engineering (AJARCSE) aims to publish cutting-edge research that
//                 contributes to the advancement of computer science and engineering.
//                 The journal focuses on delivering groundbreaking research in areas
//                 like AI, machine learning, blockchain, cybersecurity, and more.
//               </p>
//             </div>

//             {/* Scope Card */}
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div>
//                   <GiExpand className="text-[#1B356F] text-3xl mr-3" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-[#1B356F]  ">
//                   Scope of the Journal
//                 </h3>
//               </div>
//               <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                 <li>Artificial Intelligence & Machine Learning</li>
//                 <li>Blockchain & Fintech Innovations</li>
//                 <li>Cybersecurity & Data Protection</li>
//                 <li>Cloud & Edge Computing Technologies</li>
//                 <li>Robotics & Automation Systems</li>
//                 <li>Smart Cities & IoT Integration</li>
//                 <li>Quantum Computing & Cryptography</li>
//                 <li>5G Networks & Future Communication</li>
//                 <li>Green Computing & Sustainability</li>
//                 <li>Data Science & Big Data Analytics</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Aboutus;

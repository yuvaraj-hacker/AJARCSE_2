


// import React, { useEffect, useRef, useState } from 'react'
// import Dash from '../Side/Dash';
// 
// function Aboutus() {
//   const [isActive, setIsActive] = useState(true);

//   return (
//     <>
//      <HeroSection
//         backgroundImage="/images/Herosection/ground.jpg"
//         text="Article processing involves the submission, peer review, editing, and publication of research papers. It ensures quality, integrity, and compliance with ethical standards before making the article publicly available."
//       />
//       <section className="  mx-auto">
//         <div className="relative overflow-hidden bg-white">
//           <div className="absolute inset-0">
//             <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
//           </div>
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-14   py-7">
//             <div className="text-center mb-12">

//               <div className='flex justify-center gap-3 items-center'>
//                 <div className='w-1 h-8 bg-[#1B356F]  '>
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-800  ">Article Processing</h2>
//               </div>
//               <div className="relative">

//               <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
//               <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
//             </div>
//               <div className="max-w-full w-full leading-relaxed">

//                 <ul className='md:mt-8 mt-4 list-disc list-outside pl-5 md:text-base text-sm text-justify  '>
//                   <li>All articles in the International Journal of Advanced Research in Information Technology and Management Science (AJARCSE) journals are of Open Access (OA).</li>
//                   <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
//                   <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
//                 </ul>



//               </div>
//             </div>


//           </div>
//         </div>

//       </section>
//     </>
//   )
// }
// export default Aboutus




import React from 'react';
import HeroSection from '../Home/HeroSection';
import { FaGlobe, FaPenAlt, FaShareAlt } from 'react-icons/fa';
import Design from './Design';
// import { Check, Info, FileText, Users, Globe } from 'lucide-react';

const Aboutus = () => {
  const benefits = [
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Open Access",
      description: "Free and immediate access to all articles for readers worldwide"
    },
    {
      icon: <FaShareAlt className="w-6 h-6" />,
      title: "Wide Distribution",
      description: "Maximum visibility and impact for your research"
    },
    {
      icon: <FaPenAlt className="w-6 h-6" />,
      title: "Author Rights",
      description: "Authors retain copyright under Creative Commons license"
    }
  ];

  const charges = [
    {
      type: "Standard Publication",
      price: "0",
      features: [
        "Thorough peer review process",
        "Editorial review and feedback",
        "Plagiarism check",
        "Basic formatting",
        "DOI assignment",
        "Indexing in major databases",
        "Publication certificate"
      ]
    },
    {
      type: "Enhanced Publication",
      price: "199",
      features: [
        "All Standard features",
        "Priority review process",
        "Advanced language editing",
        "Enhanced formatting",
        "Social media promotion",
        "Featured article placement",
        "Citation tracking"
      ],
      optional: true
    }
  ];

  return (
    <>

      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text="Article processing involves the submission, peer review, editing, and publication of research papers. It ensures quality, integrity, and compliance with ethical standards before making the article publicly available."
      />
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Design topic="Article Processing Charges" />
            <p className="md:text-lg text-sm text-gray-600 max-w-3xl mx-auto">
              We believe in making research freely accessible to everyone. Our journal operates on a full open access model, ensuring your work reaches the widest possible audience.
            </p>
          </div>

          {/* Open Access Benefits */}
          <div className="grid md:grid-cols-3 md:gap-8 gap-4 md:mb-16 mb-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-bl-3xl p-6 text-center ">
                <div className="text-[#1B356F] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="md:text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 md:text-base text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Publication Options */}


          {/* Additional Information */}
          <div className="md:mt-12 bg-blue-50 rounded-bl-3xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start">
              {/* <Info className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /> */}
              <div>
                <h4 className="md:text-lg font-semibold text-gray-900 mb-2">Publication Policies</h4>
                <ul className="space-y-2 text-gray-600 md:text-base text-sm list-disc">
                  <li>  No mandatory charges for authors</li>
                  <li>  build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
                  <li>  Fee waivers available for researchers from low-income countries</li>
                  <li>  Enhanced services are completely optional</li>
                  <li>  Rigorous peer review process regardless of chosen package</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
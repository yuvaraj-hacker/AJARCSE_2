import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   md:py-16 py-7">
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-12  items-center ">
            <div className="relative z-10   ">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-5xl mb-6">
                <span className="text-[#1B356F]">American Journal</span> of Advanced Research
              </h1>
              <p className="md:text-lg text-sm text-gray-600 leading-relaxed">
                Welcome to the American Journal of Advanced Research in Computer Science & Engineering (AJARCSE), a premier open-access, peer-reviewed platform for cutting-edge research in technology and engineering.
              </p>
              <div className="md:mt-8 mt-5 flex gap-4">
                <Link to="/aboutus">
                  <button className="bg-[#1B356F] text-white hover:text-white md:px-6 px-4 md:py-3 py-2 md:text-base text-sm rounded-lg font-semibold hover:bg-[#1B356F] transition-colors">
                    Read More
                  </button>
                </Link>
                <button className="border border-[#1B356F] text-[#1B356F] md:px-6 px-4 md:py-3 py-2 lg:hidden  md:text-base text-sm block rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Submission Portal
                </button>
              </div>
            </div>
            <div className="relative lg:h-[500px]   h-[300px] lg:w-full w-[300px]  mx-auto ">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-3 md:shadow-xl">
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src="/images/Herosection/aiimage.jpg"
                  alt="AI Research"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="flex items-center justify-center">
        <hr className="flex-grow border-t border-[#F2F2F2]" />
        <img
          src="/images/Herosection/expand.png"
          alt="Down Arrow"
          className="mx-1 w-7 "
        />
        <hr className="flex-grow border-t border-[#F2F2F2]" />
      </div>

      {/* Research Areas Section */}
      <section className="md:py-16 py-5 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="md:text-3xl text-xl font-bold text-center text-[#1B356F] md:mb-12 mb-3">
            Research Topics
          </h2>
          <div className="grid md:grid-cols-3 md:gap-8 gap-4">
            {[
              // Column 1
              [
                "AI & Machine Learning Innovations",
                "Blockchain & Fintech Evolution",
                "Quantum Computing Trends",
                "Edge Computing & IoT",
                "Cybersecurity & Threat Intelligence",
                "Cloud Computing Advances",
                "Big Data & Predictive Analytics",
                "Augmented & Virtual Reality (AR/VR)"
              ],
              // Column 2
              [
                "Automation & Robotics",
                "Digital Transformation Strategies",
                "5G & Future Networks",
                "Smart Cities & IoT Integration",
                "Human-Computer Interaction",
                "Deep Learning & Neural Networks",
                "Computational Intelligence",
                "Natural Language Processing (NLP)"
              ],
              // Column 3
              [
                "Bioinformatics & Computational Biology",
                "Cryptography & Data Security",
                "E-Governance & Digital Policies",
                "Green Computing & Energy Efficiency",
                "Software Engineering Trends",
                "Computer Vision & Image Processing",
                "E-Commerce & Smart Payment Systems",
                "Ethical AI & Responsible Computing"
              ]
            ].map((column, columnIndex) => (
              <div key={columnIndex} className="md:space-y-4 space-y-2">
                {column.map((area, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-2 h-2 rounded-full bg-[#1B356F] group-hover:bg-[#1B356F] mr-3"></div>
                    <p className="text-black group-hover:text-[#1B356F] md:text-base text-sm font-medium">{area}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


// import React from "react";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 American Journal of Advanced Research
//                 <span className="text-blue-600"> in Computer Science & Engineering</span>
//               </h1>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 A scholarly open access, peer-reviewed interdisciplinary journal focusing on cutting-edge research in Computer Science, Information Technology, and Management Science.
//               </p>
//               <div className="flex gap-4">
//                 <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//                   Submit Paper
//                 </button>
//                 <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
//                   Browse Articles
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
//                 <img 
//                   className="w-full h-auto" 
//                   src="/images/Herosection/ai-images.jpg" 
//                   alt="AI Research"
//                 />
//               </div>
//               <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
//               <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Research Areas Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Research Areas Covered
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {researchAreas.map((area, index) => (
//               <div 
//                 key={index}
//                 className="group p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
//                     <svg 
//                       className="w-6 h-6 text-blue-600 group-hover:text-white" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth={2} 
//                         d="M13 10V3L4 14h7v7l9-11h-7z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                     {area}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Research areas data
// const researchAreas = [
//   "AI & Machine Learning Innovations",
//   "Blockchain & Fintech Evolution",
//   "Quantum Computing Trends",
//   "Edge Computing & IoT",
//   "Cybersecurity & Threat Intelligence",
//   "Cloud Computing Advances",
//   "Big Data & Predictive Analytics",
//   "Augmented & Virtual Reality (AR/VR)",
//   "Automation & Robotics",
//   "Digital Transformation Strategies",
//   "5G & Future Networks",
//   "Smart Cities & IoT Integration",
//   "Human-Computer Interaction",
//   "Deep Learning & Neural Networks",
//   "Computational Intelligence",
//   "Natural Language Processing (NLP)",
//   "Bioinformatics & Computational Biology",
//   "Cryptography & Data Security",
//   "E-Governance & Digital Policies",
//   "Green Computing & Energy Efficiency",
//   "Software Engineering Trends",
//   "Computer Vision & Image Processing",
//   "E-Commerce & Smart Payment Systems",
//   "Ethical AI & Responsible Computing"
// ];

// export default Home;
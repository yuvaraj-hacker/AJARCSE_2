import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaClipboardCheck, FaBolt, FaUsers, FaSearch, FaRobot, FaLeaf, FaGavel } from "react-icons/fa";
import { FaCheckCircle, FaClock, FaCogs, FaTrophy, FaChartLine } from "react-icons/fa";
import { FaFileAlt, FaCalendarAlt, FaSyncAlt, } from "react-icons/fa";
import { SiEthereum } from 'react-icons/si';
import { GiDna1, GiProcessor } from 'react-icons/gi';
import { IoHardwareChipOutline } from 'react-icons/io5';
import { BiLockAlt } from 'react-icons/bi';
import { MdLocationCity, MdOutlineTransform } from 'react-icons/md';
import { RiSignalTowerLine } from 'react-icons/ri';

const Home = () => {
  const topics = [
    { name: "AI & Machine Learning Innovations", icon: <FaRobot /> },
    { name: "Blockchain & Fintech Evolution", icon: <SiEthereum /> },
    { name: "Quantum Computing Trends", icon: <GiProcessor /> },
    { name: "Edge Computing & IoT", icon: <IoHardwareChipOutline /> },
    { name: "Automation & Robotics", icon: <FaCogs /> },
    { name: "Digital Transformation Strategies", icon: <MdOutlineTransform /> },
    { name: "5G & Future Networks", icon: <RiSignalTowerLine /> },
    { name: "Smart Cities & IoT Integration", icon: <MdLocationCity /> },
    { name: "Bioinformatics & Computational Biology", icon: <GiDna1 /> },
    { name: "Cryptography & Data Security", icon: <BiLockAlt /> },
    { name: "E-Governance & Digital Policies", icon: <FaGavel /> },
    { name: "Green Computing & Energy Efficiency", icon: <FaLeaf /> },
    { name: "NLP in Healthcare", icon: <FaRobot /> },
    { name: "Cybersecurity in Cloud", icon: <BiLockAlt /> },
    { name: "Big Data for Smart Cities", icon: <RiSignalTowerLine /> },
    { name: "AI in Healthcare Solutions", icon: <FaRobot /> },
    { name: "AR & VR Technologies", icon: <GiProcessor /> },
    { name: "Edge AI for Data Processing", icon: <IoHardwareChipOutline /> },
    { name: "DLT for Secure Transactions", icon: <SiEthereum /> },
    { name: "Autonomous Vehicles", icon: <FaCogs /> },
    { name: "ML for Predictive Finance", icon: <FaRobot /> },
    { name: "IoT for Smart Homes", icon: <IoHardwareChipOutline /> },
    { name: "RPA in Business Operations", icon: <FaCogs /> },
    { name: "Neural Networks & Deep Learning", icon: <FaRobot /> },
    { name: "HCI for User Experience", icon: <GiProcessor /> },
    { name: "AI in Agriculture", icon: <FaRobot /> },
    { name: "Data Privacy & Ethics", icon: <BiLockAlt /> },

  ];
  const benefits = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-4xl" />,
      title: "High-Quality Research",
      description: "We ensure top-tier academic and industry research, maintaining rigorous scientific integrity.",
    },
    {
      icon: <FaUsers className="text-green-600 text-4xl" />,
      title: "Global Recognition",
      description: "Join a worldwide network of researchers and industry professionals.",
    },
    {
      icon: <FaClock className="text-yellow-500 text-4xl" />,
      title: "Quick Publication",
      description: "We offer a fast-track publication process without compromising quality.",
    },
    {
      icon: <FaCogs className="text-purple-600 text-4xl" />,
      title: "Innovative Research Topics",
      description: "Stay ahead with the latest advancements in computer science and engineering.",
    },
    {
      icon: <FaTrophy className="text-red-500 text-4xl" />,
      title: "Reputed Editorial Board",
      description: "Our journal is backed by experienced scholars and industry leaders.",
    },
    {
      icon: <FaChartLine className="text-indigo-500 text-4xl" />,
      title: "Maximum Impact",
      description: "Your research gains visibility with open-access indexing and DOI assignments.",
    },
  ];

  const features = [
    {
      icon: <FaGlobe className="text-blue-600 text-4xl" />,
      title: "Open Access",
      description: "All published articles are freely accessible to researchers worldwide, ensuring maximum visibility and citations.",
    },
    {
      icon: <FaClipboardCheck className="text-green-600 text-4xl" />,
      title: "Rigorous Peer Review",
      description: "Our double-blind peer review process ensures that all submissions maintain high scientific and ethical standards.",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-4xl" />,
      title: "Fast-Track Publication",
      description: "We offer an efficient review and publication process, helping authors disseminate their work quickly.",
    },
    {
      icon: <FaUsers className="text-purple-600 text-4xl" />,
      title: "Global Reach",
      description: "We provide a worldwide platform for researchers to showcase their work and engage with a diverse academic community.",
    },
    {
      icon: <FaSearch className="text-red-500 text-4xl" />,
      title: "DOI & Indexing",
      description: "Published papers are assigned a DOI (Digital Object Identifier) and indexed in reputed databases to enhance discoverability.",
    },
  ];
  const InfoCard = ({ icon, title, description }) => {
    return (
      <div className="border-[#F2F2F2] border rounded-3xl p-5 space-y-3">
        <div className="p-3 bg-[#F2F2F2] w-fit rounded-xl">{icon}</div>
        <p className="md:text-2xl text-xl text-[#1B356F] font-bold">{title}</p>
        <p className="md:text-base text-sm">{description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="relative overflow-hidden    bg-[url('/images/Herosection/ground.jpg')]">
        <div className="max-w-[80rem] mx-auto px-5     md:py-16 py-7 ">
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-12  items-center ">
            <div className="relative z-10   ">
              <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl mb-6">
                American Journal  of Advanced Research in Computer Science and Engineering
              </h1>
              <p className="md:text-lg text-sm leading-relaxed text-white text-justify">
                Welcome to the American Journal of Advanced Research in Computer Science & Engineering (AJARCSE), a premier open-access, peer-reviewed platform for cutting-edge research in technology and engineering.
              </p>
              <div className="md:mt-8 mt-5 flex gap-4">
                <Link to="/aboutus">
                  <button className="bg-[#1B356F] text-white md:px-6 px-4 md:py-3 py-2 md:text-base text-sm rounded-bl-3xl hover:bg-blue-50 font-semibold hover:text-[#1B356F] transition-colors">
                    Read More
                  </button>
                </Link>
                <button className="border border-[#1B356F] text-white bg-[#1B356F] md:px-6 px-4 md:py-3 py-2 lg:hidden  md:text-base text-sm block rounded-bl-3xl font-semibold hover:bg-blue-50 transition-colors">
                  Submission Portal
                </button>
              </div>
            </div>
            <div className="relative lg:h-[500px] h-[300px] lg:w-full w-[300px] mx-auto ">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-3 md:shadow-xl">
                <img className="w-full h-full object-cover rounded-3xl" src="/images/Herosection/aiimage.jpg" alt="AI Research" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white md:py-12  py-5 ">
        <div className="max-w-[80rem] mx-auto px-5  text-center">
          <div className='space-y-2 mb-5'>
            <div className='flex justify-center gap-3 items-center'>
              <div className='w-1 h-8 bg-[#1B356F]  '>

              </div>
              <h2 className="md:text-3xl font-bold text-gray-800  text-xl ">Why Choose Us?</h2>
            </div>
            <p className="text-gray-600 mb-10 md:text-lg text-sm">
              Discover why researchers and professionals trust our journal for publishing their cutting-edge work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="md:p-4 p-2 bg-gray-100   rounded-bl-3xl transform hover:scale-105 transition-transform duration-300" >
                <div className="flex justify-center md:mb-4">{benefit.icon}</div>
                <h3 className="md:text-xl text-lg font-semibold text-gray-800 md:mb-3 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 md:text-base text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='2xl:h-[85vh] relative '>
        <section className="md:py-16 py-5 bg-[url('/images/Herosection/ground.jpg')] bg-no-repeat bg-cover bg-center 2xl:h-[330px] ">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className='grid lg:grid-cols-3 grid-cols-1 '>

              <div className='flex justify-center gap-3 items-center lg:mb-96 mb-5'>
                <div className='w-1 h-8 bg-white '> 
                </div>
                <h2 className="md:text-3xl font-bold text-white  text-xl ">Research Topics covered</h2>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 col-span-2">
                {topics.map((topic, index) => (
                  <div key={index} className="md:space-y-4 space-y-2">
                    <div className="flex items-center gap-4 bg-white lg:p-5 border border-[#1B356F] xl:h-12 rounded-bl-3xl transition-colors group">
                      <div className=" p-2 text-[#1B356F] rounded-lg text-xl     ">{topic.icon}</div>
                      <p className="text-black md:text-sm text-sm  font-semibold">{topic.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <img className='absolute left-0 -bottom-40 -z-10  opacity-30' src="/images/Herosection/pap.png" alt="" />
      </section>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 md:py-12 py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className='flex justify-center gap-3 items-center mb-3'>
            <div className='w-1 h-8 bg-[#1B356F]  '>
            </div>
            <h2 className="md:text-3xl text-xl font-bold text-gray-800  ">Submit Your Research</h2>
          </div>
          <p className="text-gray-700 md:mb-8 md:text-lg text-sm">
            AJARCSE invites high-quality research papers, survey papers, case studies, and technical articles from scholars, students, and industry experts. We welcome both theoretical and experimental studies that contribute to the advancement of computer science and engineering.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div></div>
            <div className="lg:p-6 p-3 bg-white  rounded-bl-3xl flex items-start gap-4">
              <FaFileAlt className="text-yellow-500 text-4xl" />
              <div>
                <h3 className="md:text-lg text-base font-semibold text-gray-800">Submission Guidelines</h3>
                <p className="text-gray-600 md:text-base text-sm">Follow our manuscript preparation guidelines before submission.</p>
              </div>
            </div>  
            <div></div>
          </div>
          <a href="#" className="md:mt-8 md:text-base text-sm inline-block bg-[#1B356F] text-white font-semibold py-3 px-6 rounded-bl-3xl shadow-md hover:bg-[#1B356F] transition duration-300"  >
            🔗 Submit Your Paper Now
          </a>
        </div>
      </section>

      {/* <div className="flex items-center justify-center">
        <hr className="flex-grow border-t border-[#F2F2F2]" />
        <img
          src="/images/Herosection/expand.png"
          alt="Down Arrow"
          className="mx-1 w-7 "
        />
        <hr className="flex-grow border-t border-[#F2F2F2]" />
      </div> */}
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
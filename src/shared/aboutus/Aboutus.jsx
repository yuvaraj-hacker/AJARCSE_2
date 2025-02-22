import React from 'react';
import HeroSection from '../Home/HeroSection';
import Design from '../journal-overview/Design';

const AboutUs = () => {
  const sections = [
    {
      title: "Scope",
      content: "The scope of the AJARCSE is to provide an academic medium and an important reference for the advancement and dissemination of research results that support high-level learning, teaching and research in the fields of engineering, science and technology. Original theoretical work and application-based studies, which contributes to a better understanding of engineering, science and technological challenges, are encouraged."
    },
    {
      title: "Mission",
      content: "Our mission is to provide a platform for researchers, academicians, professionals, and students to publish innovative research in the fields of information technology (IT) and management science. By fostering rigorous inquiry and dialogue, we aim to contribute to the body of knowledge that informs both theory and practice in these critical areas."
    },
    {
      title: "Research Areas",
      isList: true,
      content: [
        "AI & Machine Learning Innovations",
        "Blockchain & Fintech Evolution",
        "Quantum Computing Trends",
        "Edge Computing & IoT",
        "Automation & Robotics",
        "Digital Transformation Strategies"
      ]
    },
    {
      title: "Publication Ethics",
      content: "We adhere strictly to the highest ethical standards in publishing and strive for transparency, integrity, and fairness in our peer-review process. Authors can expect a constructive review process that maintains confidentiality and upholds academic rigor."
    },
    {
      title: "Audience",
      content: "Our audience includes researchers, educators, practitioners, and policymakers interested in the latest advancements and applications in IT and management science. We encourage interdisciplinary research that bridges the gap between theory and practice."
    },
    {
      title: "Submission Guidelines",
      content: "Authors are invited to submit original manuscripts that have not been published previously and are not under consideration elsewhere. Detailed submission guidelines can be found on our website to ensure clarity and consistency in the submission process."
    }
  ];

  return (
    <>

      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text="          American Journal of Advanced Research in Computer Science & Engineering (AJARCSE) is a scholarly peer-reviewed journal dedicated to advancing the understanding and application of information technology and management science in today's digital age.
 "  />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-14">
            <div className="text-center md:mb-12 ">
              <Design topic="About Us" />
            </div>

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 md:gap-8 gap-4">
                {sections.map((section, index) => (
                  <div key={index} className={` ${index % 2 ? ' bg-white ' : ' md:bg-gradient-to-l from-blue-50/50 to-blue-100/50    bg-white  '} md:p-8 p-4 rounded-bl-3xl  shadow-md transition-shadow duration-300`}  >
                    <h2 className="md:text-2xl text-xl font-bold text-[#1B356F] mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-[#1B356F] text-sm font-bold">{index + 1}</span>
                      </span> {section.title}
                    </h2>
                    {section.isList ? (
                      <ul className="md:space-y-2 space-y-1 text-black">
                        {section.content.map((item, idx) => ( 
                          <li key={idx} className="flex md:text-base text-sm items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1B356F] mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-black leading-relaxed md:text-base text-sm">
                        {section.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}

      </div>
    </>
  );
};

export default AboutUs;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, FileCheck, UserCheck, Ban, Scale, AlertCircle } from 'lucide-react';
import HeroSection from '../Home/HeroSection';
import Design from './Design';

const Aboutus = () => {
  const [openSection, setOpenSection] = useState(null);

  const ethicsSections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Research Integrity",
      content: `Our journal upholds the highest standards of research integrity. All submissions must:
        • Present original work with proper attribution
        • Include accurate and verifiable data
        • Disclose any potential conflicts of interest
        • Follow international research ethics guidelines
        • Obtain appropriate institutional approvals for human/animal studies`
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Plagiarism Policy",
      content: `We maintain a zero-tolerance policy towards plagiarism:
        • All submissions undergo rigorous plagiarism checking
        • Authors must certify the originality of their work
        • Previously published material must be properly cited
        • Self-plagiarism is also considered a violation
        • Detected plagiarism results in immediate rejection`
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Authorship Guidelines",
      content: `Authorship must reflect genuine contributions to the work:
        • All authors must have made substantial contributions
        • Each author should be able to identify their specific contribution
        • Ghost, gift, and guest authorship are not permitted
        • Changes to authorship require written consent from all authors
        • Corresponding authors must ensure all co-authors approve the final version`
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "Publication Malpractice",
      content: `We actively prevent and address publication malpractice:
        • Data fabrication or manipulation is strictly prohibited
        • Duplicate submissions are not allowed
        • Image manipulation must be disclosed and justified
        • Violations result in retraction and author sanctions
        • Authors must disclose any related submissions or publications`
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Peer Review Ethics",
      content: `Our peer review process follows strict ethical guidelines:
        • Double-blind peer review ensures unbiased evaluation
        • Reviewers must declare conflicts of interest
        • Confidentiality of submissions is maintained
        • Reviewers must not use unpublished information
        • Editorial decisions are based on merit alone`
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Misconduct Handling",
      content: `We have established procedures for handling misconduct:
        • All allegations are thoroughly investigated
        • Authors are given opportunity to respond
        • Retractions are published when necessary
        • Institutional authorities are notified when appropriate
        • Appeals process is available for disputed decisions`
    }
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text="Publication ethics are the principles and standards that guide the behavior of authors, editors, peer reviewers, and publishers to ensure integrity, transparency, and accountability in the publication process."
      />
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:mb-12 mb-5">

            <Design topic="Publication Ethics" />
            <p className="md:text-lg text-sm text-gray-600 max-w-3xl mx-auto">
              We are committed to maintaining the highest standards of publication ethics and academic integrity in all our published works.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {ethicsSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button onClick={() => setOpenSection(openSection === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50"    >
                  <div className="flex items-center">
                    <span className="text-[#1B356F] mr-3">{section.icon}</span>
                    <h3 className="md:text-lg font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  {openSection === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openSection === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 whitespace-pre-line md:text-base text-sm">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl md:text-base text-sm mx-auto">
              For detailed information about our publication ethics policies or to report ethical concerns, please contact our editorial office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
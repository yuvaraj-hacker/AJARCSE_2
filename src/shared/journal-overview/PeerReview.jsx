


import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import { GrDocumentZip } from 'react-icons/gr';
import HeroSection from '../Home/HeroSection';
import Design from './Design'; import { ClipboardCheck, Clock, Users, CheckCircle, XCircle, MessagesSquare, Award, ArrowRight } from 'lucide-react';
function Aboutus() {
  const [activeStep, setActiveStep] = useState(0);
  const decisions = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Accept",
      description: "Paper meets all criteria and can proceed to publication"
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-yellow-500" />,
      title: "Minor Revision",
      description: "Small changes needed before acceptance"
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-orange-500" />,
      title: "Major Revision",
      description: "Substantial changes required"
    },
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      title: "Reject",
      description: "Paper does not meet journal standards"
    }
  ];
  const reviewSteps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Initial Screening",
      duration: "2-3 days",
      description: "Manuscripts are checked for scope, formatting, and plagiarism. Basic requirements must be met before peer review.",
      details: [
        "Scope alignment check",
        "Plagiarism detection",
        "Format compliance",
        "Language quality assessment",
        "References verification"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reviewer Assignment",
      duration: "3-5 days",
      description: "Expert reviewers are selected based on the paper's subject area and methodology.",
      details: [
        "Minimum of two reviewers per manuscript",
        "Expertise matching",
        "Conflict of interest check",
        "Double-blind review process",
        "Reviewer confirmation"
      ]
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Review Process",
      duration: "2-3 weeks",
      description: "Detailed evaluation of the manuscript's scientific merit, methodology, and significance.",
      details: [
        "Technical soundness",
        "Research methodology",
        "Result interpretation",
        "Literature coverage",
        "Overall quality assessment"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Editorial Decision",
      duration: "5-7 days",
      description: "Based on reviewer recommendations, editors make the final decision on the manuscript.",
      details: [
        "Review compilation",
        "Decision formulation",
        "Feedback preparation",
        "Revision instructions",
        "Timeline setting"
      ]
    }
  ];
  const [isActive, setIsActive] = useState(true);
  return (
    <>

      <HeroSection backgroundImage="/images/Herosection/ground.jpg" text="AJARCSE are peer-reviewed, community-driven research journals covering the latest specialist topics at the emerging intersections of IT and other fields. A general guide for how to prepare your text and graphics for an article to be included in EAI Endorsed Transactions. Submitted papers are reviewed by the AJARCSE Editorial Board & Reviewers. " />
      <section className="  mx-auto">
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-1/2  "></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-14 py-7">
            <div className="text-center mb-8">

              <Design topic="Peer Review Process" />
              <div className="relative">

                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
              </div>

            </div>

            <section className='grid md:grid-cols-2'>

              <section className="   ">
                <div className="max-w-screen-xl mx-auto px-5">
                  <div className="   rounded-lg  ">
                    {/* Header */}
                    <h3 className="md:text-2xl text-lg font-bold text-gray-800 mb-6">
                      Requirements for Publishing in <i>AJARCSE</i>
                    </h3>

                    {/* Requirements List */}
                    <ul className="list-disc pl-5 space-y-4 text-gray-700 md:text-base text-sm">
                      <li>
                        The articles must be written using the correct AJARCSE
                        <a
                          href="/documents/"
                          target="_blank"
                          className="text-blue-600 hover:underline ml-1 flex items-center gap-1"
                        >
                          template <GrDocumentZip className="text-lg" />
                        </a>
                      </li>
                      <li>
                        Researchers should adhere to publication requirements: originality, no plagiarism, and no prior publication.
                      </li>
                      <li>
                        Abstracts must be 200-1000 characters and structured according to PubMed's format.
                      </li>
                      <li>Provide 3-8 keywords representing the main content of the article.</li>
                      <li>
                        Use Vancouver reference style. Incorrect styles may require retyping and proofreading.
                      </li>
                      <li>
                        Articles must be written in formal English and thoroughly checked for spelling and grammar.
                      </li>
                      <li>Only cite published, in-press, or publicly available works.</li>
                      <li>All references mentioned in the text must appear in the reference list and vice versa.</li>
                      <li>Figures and tables should be of high, readable quality.</li>
                      <li>
                        Obtain permission for any copyrighted material used.
                      </li>
                      <li>
                        Submit papers via the
                        <a
                          href="https://AJARCSE.com/aritms/index.php/AJARCSE/about/submissions"
                          className="text-blue-600 hover:underline ml-1"
                        >
                          Open Journal System
                        </a>.
                      </li>
                    </ul>

                    {/* Submission Instructions */}
                    <h3 className="md:text-xl text-lg font-bold text-gray-800 md:mt-10 mt-5 mb-4">
                      To Submit a Paper via OJS, You Will Need:
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 md:text-base text-sm text-gray-700">
                      <li>Your manuscript in OpenOffice, Microsoft Word, or RTF format.</li>
                      <li>
                        Ensure the manuscript adheres to guidelines. For assistance, email
                        <a
                          href="mailto:editor@AJARCSE.com"
                          className="text-blue-600 hover:underline ml-1"
                        >
                          editor@ajarcse.com
                        </a>.
                      </li>
                    </ul>
                    <a
                      href="https://AJARCSE.com/aritms/index.php/AJARCSE/submission/wizard"
                      className="text-blue-600 hover:text-blue-800 underline mt-6 block"
                    >
                      Submit a Paper via OJS
                    </a>

                    {/* Article Types */}
                    <h3 className="md:text-xl text-lg font-bold text-gray-800 md:mt-10 mt-5 mb-4">Article Types</h3>
                    <ul className="list-disc pl-5 space-y-4 md:text-base text-sm text-gray-700">
                      <li>
                        <b>Research Article:</b> Detailed studies (4000-8000 words) presenting original research.
                      </li>
                      <li>
                        <b>Review Article:</b> In-depth reviews (4000-8000 words) covering published literature.
                      </li>
                      <li>
                        <b>Commentary:</b> Short pieces (up to 1000 words) reflecting opinions on a topic of interest.
                      </li>
                      <li>
                        <b>Editorial:</b> Discussions (1000-2000 words) by editors or invited researchers.
                      </li>
                      <li>
                        <b>Technical Article:</b> Specialist reports for professional audiences with flexible lengths.
                      </li>
                      <li>
                        <b>Short Communications:</b> Concise research pieces (1000-2500 words).
                      </li>
                    </ul>

                    {/* Benefits */}
                    <h3 className="text-xl font-bold text-gray-800 mt-10 mb-4">Benefits of AJARCSE</h3>
                    <h4 className="font-semibold text-gray-700 mb-3">Open Access</h4>
                    <ul className="list-disc pl-5 space-y-4 text-gray-700">
                      <li>All articles are Open Access (OA).</li>
                      <li>
                        Papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.
                      </li>
                      <li>
                        Community standards enforce proper attribution and responsible use of published work.
                      </li>
                    </ul>
                    <h4 className="font-semibold text-gray-700 mt-6 mb-3">Rigorous Review Process</h4>
                    <p className="text-gray-700">
                      Submitted papers undergo a double-blind review process, ensuring quality and transparency.
                    </p>
                  </div>
                </div>
              </section>
              <section className=''>
                <div className="rounded-bl-3xl bg-blue-50  p-6 max-w-3xl mx-auto">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-[#1B356F] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="md:text-lg font-semibold text-gray-900 mb-2">Our Review Policy</h4>
                      <ul className="space-y-2 text-gray-600 md:text-base text-sm">
                        <li>• Double-blind peer review ensures unbiased evaluation</li>
                        <li>• Each manuscript is reviewed by at least two expert reviewers</li>
                        <li>• Reviewers are given 14 days to complete their review</li>
                        <li>• Authors receive detailed feedback to improve their work</li>
                        <li>• Fast-track review available for time-sensitive research</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 md:gap-4">
                  {reviewSteps.map((step, index) => (
                    <button
                      key={index}
                      className="p-4 rounded-lg text-center "
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex justify-center mb-2">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm opacity-75">{step.duration}</p>
                    </button>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-bl-3xl  md:p-6 p-2 max-w-4xl mx-auto md:mb-12 mb-5">
                  <h3 className="text-xl font-semibold md:mb-6 text-center">Possible Review Outcomes</h3>
                  <div className="grid md:grid-cols-1 md:gap-4">
                    {decisions.map((decision, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="flex justify-center mb-2">
                          {decision.icon}
                        </div>
                        <h4 className="font-semibold mb-1">{decision.title}</h4>
                        <p className="text-sm text-gray-600">{decision.description}</p>
                      </div>
                    ))}
                  </div>
                </div>


              </section>
            </section>
          </div>
        </div>

      </section>
    </>
  )
}
export default Aboutus


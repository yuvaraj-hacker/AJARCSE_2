import React, { useEffect, useRef, useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {


  const [isActive, setIsActive] = useState(true);


  return (
    <>
      <section className="  mx-auto">
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>

            </div>
            <div className="max-w-full w-full ">
              <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                <div className=" lg:px-20 lg:py-10 px-5 py-5">
                  <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md     ">
                    <form className="w-full space-y-4" ngNativeValidate>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 "
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5     "
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label for="email" className="block mb-2 text-sm   text-gray-900 "  >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5     "
                          placeholder="Enter Your Mail"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 "
                        >
                          Contact Number
                        </label>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5     "
                          placeholder="Enter Your Number"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          for="message"
                          className="block mb-2 text-sm   text-gray-900   "
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          ngModel
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500     "
                          placeholder="Leave a Message..."
                        ></textarea>
                      </div>
                      <div className="text-center ">
                        <button
                          type="submit"
                          className="py-3 px-5 text-center text-sm hover:bg-[#1B356F] hover:text-white bg-[#1B356F]   text-white rounded-3xl  sm:w-fit  "
                        >
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                  <h3 className="mt-10 text-center text-sm md:text-lg">
                    {" "}
                    For any queries contact Email :{' '}
                    <a
                      href="mailto:editor@AJARCSE.com"
                      className="text-[#007BFF] "
                    >
                      editor@ajarcse.com
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative">

              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
export default Aboutus
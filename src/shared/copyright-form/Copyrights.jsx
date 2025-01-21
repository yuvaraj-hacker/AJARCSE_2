


import React, { useEffect, useRef, useState } from 'react'
import HeroSection from '../Home/HeroSection'

function Aboutus() {
    const [isActive, setIsActive] = useState(true)
    return (
        <>
            <HeroSection
                backgroundImage="/images/Herosection/ground.jpg"
                text="This Copyright Transfer Agreement ensures that the author(s) grant the journal exclusive rights to publish and distribute their article. By signing this form, authors confirm the originality of the work, agree to transfer copyright, and give the journal the authority to manage all rights related to the article.
  "  />
            <section className="  mx-auto">
                <div className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-14 py-7">
                        <div className="text-center md:mb-12">
                            <div className='flex justify-center gap-3 items-center'>
                                <div className='w-1 h-8 bg-[#1B356F]  '>

                                </div>
                                <h2 className="text-3xl font-bold text-gray-800  ">Copyright Form</h2>
                            </div>
                        </div>
                        <div className="relative">

                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
                        </div>

                        <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  md:py-5">
                            <div className="lg:flex md:flex ">
                                <div className="max-w-full w-full ">
                                    <div className="    ">



                                        <div className="max-w-full w-full md:text-base text-sm ">

                                            <h1 className="lg:text-xl font-semibold mb-2 mt-8">DECLARATION</h1>
                                            <p className="md:w-[450px] leading-relaxed " > I/We
                                                ____________________________.  The author / authors of the research paper/article
                                                entitled ______________________
                                                authorize you to publish the above mentioned paper/article in AJARCSE.</p>
                                            <h1 className=" lg:text-xl font-semibold mt-8 mb-2">It is herein agreed that:</h1>
                                            <h1 className=" text-justify mb-2">
                                                1. I/We will not publish his/her above said contribution anywhere else
                                                without the prior written permission of the publisher unless it has
                                                been changed substantially.</h1>
                                            <h1 className=" text-justify mb-2"></h1>
                                            <h1 className=" text-justify mb-2">2. I/ We declare and warrants that his/her/their contribution is original,
                                                except for such excerpts from copyrighted works as may be included
                                                with the permission of the copyright holder and author thereof, that
                                                it contains no libelous statements, and does not infringe on any
                                                copyright, trademark, patent, statutory right, or propriety right of
                                                others. The Author signs for and accepts responsibility for releasing
                                                this material on behalf of any and all co-authors.</h1>
                                            <h1 className=" text-justify mb-2">3. The Author also warrants that he or she has the right to enter into
                                                this Agreement, the Article contains no libelous or unlawful
                                                statements, contains no instructions that may cause harm or injury and
                                                does not violate the copyright or trademark, or infringes on the rights
                                                or the privacy of others; and that all statements in the Article
                                                asserted as facts are either true or are based upon reasonable research.</h1>
                                            <h1 className=" text-justify mb-2">4. I/We agree to indemnify the Editors AJARCSE against all claims
                                                and expenses arising from any breach of warranty from me/us in this
                                                agreement.</h1>

                                            <div className="flex justify-between flex-wrap lg:gap-0 gap-5 items-center mt-5">
                                                <div>
                                                    <h1>Date:</h1>
                                                    <h1>Mobile:</h1>
                                                </div>
                                                <div className="text-center">
                                                    <h1>1st Author Signature 2nd Author Signature</h1>
                                                    <h1>Author Name: Author Name:</h1>
                                                    <h1>Address Address</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className=" ">
                    <section className="  ">
                        <section className="">



                        </section>
                    </section>

                </section>
            </section>
        </>
    )
}
export default Aboutus



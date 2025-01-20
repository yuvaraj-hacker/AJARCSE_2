import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

function ProposeSpecial() {
  return (
    <><section>
    <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
      <div className="lg:flex md:flex  gap-8 ">
        <div className="max-w-full w-full ">
          <h1 className="text-primary-blue-color text-xl font-bold ">
          Updates will come soon...          </h1>

          <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
            {/* content goes here */}
            {/* <h1 className="flex -mt-40 h-screen justify-center items-center text-4xl font-bold">
              Coming Soon
            </h1> */}
          </div>
        </div>

        <Sidebar />
      </div>

      <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
    </div>
  </section></>
  )
}

export default ProposeSpecial
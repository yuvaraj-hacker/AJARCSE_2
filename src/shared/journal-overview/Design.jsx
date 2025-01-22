import React from 'react'

function Design({ topic }) {
    return (
        <>
            <div className='flex justify-center gap-3 mb-4 items-center'>
                <div className='w-1 h-8 bg-[#1B356F]  '>
                </div>
                <h2 className="md:text-3xl text-xl font-bold text-gray-800  ">{topic}</h2>
            </div>
        </>
    )
}

export default Design

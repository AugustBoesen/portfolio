import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center w-full pt-16 text-center '>
        <div className=''>
        {/* Title */}
        <div className='header1'>Severi Boesen |</div>
        </div>
        {/* Subtitle */}
        <div className='flex flex-row justify-center'>
            <h2 className='text-3xl mt-2 md:pl-2 '>Producer of</h2>
            <section className="animation">
                <div className="text-3xl bg-teal-800 mb-6"><div>music.</div></div>
                <div className="text-3xl bg-sky-800 mb-6 "><div>events.</div></div>
                <div className="text-3xl bg-indigo-800 mb-6"><div>code.</div></div>
            </section>           
        </div>
    </div>
  )
}

export default Hero
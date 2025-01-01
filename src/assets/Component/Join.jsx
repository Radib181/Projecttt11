import React from 'react'
import Teligram from "../Photos/Teligram.png"
import Img3 from "../Photos/Img3.png"
import Twtter from "../Photos/Twtter.png"

function Join() {
  return (
    <section className=' bg-gradient-to-r from-[#4434F8] via-[#56B48C] to-[#6A47F9]  py-12'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
          
          {/* Telegram Icon */}
          <div className='flex justify-center items-center'>
            <img className='w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg' src={Teligram} alt="Telegram Icon" />
          </div>

          {/* Main Image and Button */}
          <div className='relative  justify-center items-center'>
            <img className='w-[260px] md:w-[470px] lg:w-[590px] h-auto rounded-xl ' src={Img3} alt="Main Image" />
            
            {/* Enlarged Button Design */}
            <button className='  sm:ml-28 ml-5 px-8 py-4 sm:px-12 sm:py-6 bg-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4234FE] rounded-full border-4 border-white hover:bg-yellow-600 hover:scale-110 transition-all duration-300 shadow-2xl'>
              JOIN THE KOKSAL <br /> COMMUNITY NOW !
            </button>
          </div>

          {/* Twitter Icon */}
          <div className='flex justify-center items-center'>
            <img className='w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg' src={Twtter} alt="Twitter Icon" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Join

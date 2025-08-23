import React from 'react'

const HeroSection = () => {
  return (
    <section className='min-h-screen flex justify-around items-center flex-wrap bg-[url(/assets/hero-bw.jpg)] bg-cover bg-center  md:pt-5 pt-[150px] px-10'>
        
        <div className='md:w-[550px]'>
            <p className='bg-gray-800 text-white py-1 px-5 rounded-md w-[max-content]'>Best place for rehabilitation</p>
            <h1 className='md:text-5xl md:leading-15 font-bold text-gray-800 text-shadow-white text-4xl'>Therapeutic Massage Healing Your Body With Achieve Wellbeing</h1>
        </div>  


        <div></div>
    </section>  
  )
}

export default HeroSection
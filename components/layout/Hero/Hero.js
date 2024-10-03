import Navbar from '@/components/template/Navbar/Navbar'
import React from 'react'
import './Hero.css'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[100%] h-[600px] bg-[#fff] Hero'>
        <Navbar/>
        <div className='content_hero flex justify-around items-center w-full h-[100vh]'>
          <div className='img-hero'>
            <Image src='/img/main image.png' width={400} height={400}/>
          </div>
          <div className='caption_hero'>
            <h1>سلام</h1>
          </div>
        </div>
    </div>
  )
}

export default Hero
import Navbar from "@/components/template/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <Navbar />
      {/* hero start */}
      <div className="content_hero w-full mt-16">
        <div className="hero flex justify-around items-center max-[768px]:flex-col">
          {/* img hero */}
          <div className="img_hero">
            <Image src="/img/img_hero.jpg" width={500} height={500} className='rounded-[100%] w-[450px] h-[450px] max-[768px]:w-[300px] max-[768px]:h-[300px]' />
          </div>
          <div className="caption_hero  w-[300px] flex flex-col items-center max-[768px]:mt-5">
            <h1 className='text-[30px] font-bold'>من سجاد حسنی کاخ</h1>
            <span className='mt-5'>برنامه نویس و توسعه دهنده وب</span>
            <Link href='/' className='mt-5 bg-[#0000007e] text-[#fff] px-3 py-3 rounded-[8px]'>مشاهده رزومه</Link>
          </div>
        </div>
      </div>
      <hr className='mt-12 border-[#dac5a7]'/>
    </div>
  );
};

export default Hero;

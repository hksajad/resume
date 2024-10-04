import Navbar from "@/components/template/Navbar/Navbar";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      {/* hero start */}
      <div className="  w-full mt-[430px] flex justify-between items-center">
        {/* content_info- */}
        <div className="content_info bg-[#111111b4]  fixed rounded-[8px] flex flex-col">
          <div className="title p-5 text-[20px] font-bold">
            <h1>سجاد حسنی کاخ</h1>
          </div>
          <div className="img p-5">
            <Image src='/img/img-hero.jpg' width={300} height={300} className='w-[300px] h-[300px]'/>
          </div>
          <div className="faverit p-5 text-[20px] font-bold">
            <span>علاقه : فرانت  - اند</span>
          </div>
          <div className="location p-5 text-[20px] font-bold">
            <span>شهر من : کرمان</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;

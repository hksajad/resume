import Navbar from "@/components/template/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      {/* hero start */}
      <div className="container">
        <div className=" w-full mt-[150px] flex justify-around items-center max-[768px]:flex-col">
          {/* content_info- */}
          <div className="content_info bg-[#2b2b2b57]  rounded-[8px] flex flex-col">
            <div className="title p-5 text-[20px] font-bold">
              <h1>سجاد حسنی کاخ</h1>
            </div>
            <div className="img p-5">
              <Image
                src="/img/img-hero.jpg"
                width={300}
                height={300}
                className="w-[300px] h-[300px] rounded-[8px]"
              />
            </div>
            <div className="faverit p-5 text-[20px] font-bold">
              <span>علاقه : فرانت - اند</span>
            </div>
            <div className="location p-5 text-[20px] font-bold">
              <span>شهر من : کرمان</span>
            </div>
          </div>
          <div className="content_hero  flex flex-col px-24 text-center max-[992px]:px-10 max-[768px]:mt-5">
            <h1 className="text-[40px] font-bold max-[768px]:text-[30px]">من سجاد حسنی کاخ</h1>
            <span className="mt-5 font-bold text-[17px] tracking-[2px]">
              برنامه نویس و توسعه دهنده وب
            </span>
            <Link href="/" className='mt-5 bg-[#00000055] px-3 py-3 w-[150px] m-auto rounded-[8px]'>مشاهده رزومه</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

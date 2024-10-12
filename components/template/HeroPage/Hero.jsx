import { FaLocationDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container">
      <div className="HeroPage overflow-x-hidden max-w-[900px] m-auto   mt-[250px] max-[768px]:mt-[200px] max-[768px]:max-w-[100%]">
        <div className="info_hero flex justify-between items-center">
          <div className="actived flex items-center gap-1">
            <FaLocationDot />
            <span>ایران , کرمان</span>
          </div>
          <div className="location flex items-center gap-1">
            <FaCircle className="text-green-300" />
            <span>در دسترس برای کار</span>
          </div>
        </div>
        {/* content hero */}
        <div className="content_hero mt-10 flex justify-between items-center gap-[100px] max-[992px]:gap-[50px]">
          <div className="img_hero">
            <Image
              src="/img/imgabout.png"
              width={400}
              height={400}
              className="w-[400px] h-[400px] rounded-[10px] max-[992px]:w-[500px]"
            />
          </div>
          <div className="caption_hero w-[700px]  rounded-[10px] bg-[#fff] p-5 max-[768px]:text-center max-[768px]:max-w-[100%] max-[768px]:bg-[#ffffff9d]">
            <h1 className="font-bold text-[30px]">سلام !</h1>
            <h2 className="font-bold mt-3 text-[30px]">من سجاد حسنی کاخ</h2>
            <h3 className="font-bold mt-3 text-[40px]">
              طراح و برنامه نویس وب
            </h3>
            <div className="link_hero mt-10 mb-3">
              <Link
                href="/"
                className="bg-[#3f3768] text-[#fff] px-3 py-3 rounded-[10px]"
              >
                نمونه کارها
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

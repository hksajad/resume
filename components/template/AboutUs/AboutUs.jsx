import Footer from "@/components/layout/Footer/Footer";
import NavbarRout from "@/components/module/NavRoutPage/NavbarRout";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="AboutUs w-full  mt-20">
      <div className="title_about flex justify-center items-center">
        <h1 className="font-bold text-[40px] text-[#1a1a1acc]">درباره من</h1>
      </div>
      <div className="container">
        <div className="content_about flex justify-between items-center mt-28 max-[768px]:flex-col">
          <NavbarRout />
          <div className="caption_about w-[800px] max-[768px]:w-full">
            <p className="font-bold text-justify text-[20px] leading-[40px] max-[768px]:text-[17px]">
              برنامه‌نویس طراحی سایت با [4] سال تجربه در توسعه وب‌ سایت‌های
              کاربرپسند و جذاب. مهارت‌های قوی در HTML، CSS، JavaScript و
              فریم‌ورک‌ مدرن مانند NextJs و  دارای تجربه در بهینه‌سازی
              تجربه کاربری و طراحی واکنش‌گرا. متعهد به یادگیری مداوم و به‌روز
              نگه‌داشتن مهارت‌ها برای تطابق با تکنولوژی‌های جدید.
            </p>
            <div className="btn flex items-center justify-center gap-10 flex-wrap mt-10">
              <div className="borders border-dotted border-2 border-[#1a1a1a] rounded-[8px] py-2 px-2">html,css,js (100%)</div>
              <div className="borders border-dotted border-2 border-[#1a1a1a] rounded-[8px] py-2 px-2">TailwindCSS (100%)</div>
              <div className="borders border-dotted border-2 border-[#1a1a1a] rounded-[8px] py-2 px-2">flexbox (100%)</div>
              <div className="borders border-dotted border-2 border-[#1a1a1a] rounded-[8px] py-2 px-2">NextJs (70%)</div>
              <div className="borders border-dotted border-2 border-[#1a1a1a] rounded-[8px] py-2 px-2">ICDL (100%)</div>
            </div>
            <div className="info flex justify-between items-center flex-wrap mt-10 max-[992px]:justify-center max-[992px]:gap-5 max-[768px]:mb-10">
              <h1 className="text-[18px] font-bold">تلفون : 09339790644</h1>
              <h1 className="text-[18px] font-bold">ایمیل : kakh.sajad@gmail.com</h1>
              <h1 className="text-[18px] font-bold">گیت هاب : github.com/hksajad</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;

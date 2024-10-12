import Image from "next/image";
import { SiAboutdotme } from "react-icons/si";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="AboutUs mt-28 mb-28 overflow-x-hidden max-w-[900px] m-auto max-[768px]:max-w-[100%]" id="AbouUs">
        <div className="content_about flex justify-between  gap-[100px] max-[992px]:gap-[50px] max-[768px]:flex-col">
          <div className="title_about text-[25px] font-bold ">
            <h1 className="max-[992px]:w-[100px]">درباره من</h1>
          </div>
          <div className="caption_about w-[700px] max-[768px]:w-[100%]">
            <p className="text-justify leading-[40px] text-[17px] font-bold max-[768px]:text-[15px]">
              برنامه‌نویس طراحی سایت با [4] سال تجربه در توسعه وب‌سایت‌های
              کاربرپسند و جذاب. مهارت‌های قوی در HTML، CSS، JavaScript و
              فریم‌ورک‌های مدرن مانند NextJs   دارای تجربه در بهینه‌سازی
              تجربه کاربری و طراحی واکنش‌گرا. متعهد به یادگیری مداوم و به‌روز
              نگه‌داشتن مهارت‌ها برای تطابق با تکنولوژی‌های جدید.
            </p>
            <Image src='/img/emza.png' width={300} height={300} className="pt-20 max-[768px]:m-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="AboutUs mt-28">
      <div className="title_about flex justify-center">
        <h1 className="text-[30px] font-bold">درباره من</h1>
      </div>
      <div className="container">
        <div className="caption_about mt-12 flex justify-around items-center max-[768px]:flex-col">
          <div className="cap_aboutUs w-[700px] leading-[40px] text-justify max-[768px]:w-full max-[768px]:px-10">
            <p className='text-[20px]'>
              من یک برنامه‌نویس وب با بیش از [4 سال]  تجربه در طراحی و
              توسعه وب‌سایت‌های کاربرپسند و بهینه‌سازی شده برای موتورهای جستجو
              هستم. دارای مهارت‌های قوی در ICDL و  زبان‌های برنامه‌نویسی مانند HTML،
              CSS، JavaScript و فریم‌ورک‌ محبوب مانند next   هستم.
            </p>
          </div>
          <div className="info_aboutUs flex flex-col max-[768px]:flex-row max-[768px]:items-center max-[768px]:gap-12 max-[768px]:mt-5">
            <div className="name font-bold text-[20px] max-[768px]:hidden">سجاد حسنی کاخ</div>
            <div className="phone mt-5">
                <h1 className='max-[768px]:text-center'> تلفون:     </h1>
                <p>09339790644</p>
            </div>
            <div className="email mt-5">
                <h1 className='max-[768px]:text-center'> ایمیل:     </h1>
                <p>kakh.sajad@gmail.com</p>
            </div>
            <div className="loca mt-5">
                <h1 className='max-[768px]:text-center'> مکان:     </h1>
                <p>ایران , کرمان</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

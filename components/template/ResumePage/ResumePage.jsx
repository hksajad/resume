import Link from "next/link";

const ResumePage = () => {
  return (
    <div className="container">
      <div className="ResumePage mt-28 mb-28  max-w-[900px] m-auto max-[768px]:max-w-[100%]">
        <div className="content_resume content_about flex justify-between  gap-[100px] max-[992px]:gap-[50px] max-[768px]:flex-col">
          <div className="title text-[25px] font-bold">
            <h1 className="max-[992px]:w-[100px]">رزومه من</h1>
          </div>
          <div className="resume w-[700px] max-[768px]:w-[100%]">
            {/* education */}
            <div className="education">
              <h1 className="font-bold text-[25px]">تحصیلی</h1>
              <div className="content_education flex gap-2 mt-5">
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  دیپلم رشته علوم تجربی
                </h1>
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  لیسانس رشته مهندسی کامپیوتر
                </h1>
              </div>
            </div>
            {/* skills */}
            <div className="skills mt-5">
              <h1 className="font-bold text-[25px]">مهارت</h1>
              <div className="content_education flex gap-2 mt-5 flex-wrap">
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  html,css,js(100%)
                </h1>
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  flexbox(100%)
                </h1>
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  nextJs(70%)
                </h1>
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  Icdl(100%)
                </h1>
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  tailwindcss(100%)
                </h1>
              </div>
            </div>
            {/* work skill */}
            <div className="work_skill mt-5">
              <h1 className="font-bold text-[25px]">کاری</h1>
              <span className="mt-[10px] font-bold text-[17px] max-[768px]:text-[15px]">
                طراحی وب سایت آزمایشگاه ژنتیک{" "}
                <Link
                  href="https://salehgohari.ir/"
                  className="text-[#fff] bg-[#3f3768] p-2 rounded-[8px]"
                >
                  دکتر صالح گوهری
                </Link>
              </span>
            </div>
            {/* Certificate */}
            <div className="Certificate mt-5">
              <h1 className="font-bold text-[25px]">گواهینامه مهارت</h1>
              <div className="content_certificate flex gap-2 mt-5">
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  مدرک فنی حرفه ای ICDL
                </h1>
                <h1 className="border-dotted border-[2px] px-3 py-3 border-[#3f3768] rounded-[8px] max-[768px]:text-[12px]">
                  مدرک فنی حرفه ای طراحی وب
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

import Image from "next/image"
import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="HeroPage">
      <div className="container">
        <div className="hero flex justify-around items-center w-[1200px] m-auto h-[100vh] mt-14 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-32 max-[992px]:w-full max-[992px]:gap-10">
          {/* img hero */}
          <div className="img_hero">
            <Image src='/img/imgg.png' width={500} height={500} className='w-[400px] h-[500px] border-[4px] border-[#1a1a1a] max-[768px]:w-[300px] max-[768px]:h-[400px]'/>
          </div>
          {/* content hero */}
          <div className="content_hero w-[430px]  flex flex-col max-[768px]:text-center max-[992px]:w-[500px]">
            <span className='font-bold text-[25px]'>سلام !</span>
            <h1 className='font-bold text-[30px]'>من سجاد حسنی کاخ</h1>
            <h2 className='font-bold text-[40px] tracking-[4px] text-orange-400 max-[768px]:text-[30px]'>طراح و برنامه نویس وب</h2>
            <Link href='/' className='mt-5 bg-[#1a1a1a] text-[#fff] w-[150px] px-3 py-3 text-center rounded-[8px] max-[768px]:m-auto max-[768px]:mt-4'>مشاهده رزومه</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

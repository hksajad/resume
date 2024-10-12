import Link from "next/link";
import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <section className="NavPage">
      <div className="container">
        <nav className="navbar flex justify-center items-center gap-12 pt-5 pb-5 max-[768px]:max-w-[280px]">
          <Link href="/" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden text-[#3f3768]">
              صفحه اصلی
            </h1>
            <IoHomeOutline className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
          <Link href="#AbouUs" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden text-[#3f3768]">
              درباره من
            </h1>
            <SiAboutdotme className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
          <Link href="/Work" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden text-[#3f3768]">
              نمونه کارها
            </h1>
            <MdWorkOutline className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
          <Link href="/Contact" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden text-[#3f3768]">
              ارتباط با من
            </h1>
            <FaRegUser className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

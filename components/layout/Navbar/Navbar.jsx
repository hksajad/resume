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
        <nav className="navbar flex justify-center items-center gap-12 pt-5 pb-5 max-[768px]:max-w-[300px]">
          <Link href="/" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden">
              یصفحه اصلی
            </h1>
            <IoHomeOutline className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
          <Link href="/AboutMe" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden">
              درباره من
            </h1>
            <SiAboutdotme className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
          <Link href="/" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden">
              نمونه کارها
            </h1>
            <MdWorkOutline className="hidden text-[30px] font-bold max-[768px]:flex" />
          </Link>
          <Link href="/" className='cursor-pointer'>
            <h1 className="text-[20px] font-bold max-[768px]:hidden">
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

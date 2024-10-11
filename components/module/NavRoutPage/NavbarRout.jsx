import Image from "next/image"
import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
const NavbarRout = () => {
  return (
    <div className="NavbarRout  bg-[#fff0] mb-10 shadow-2xl w-[400px] mx-5 flex flex-col items-center rounded-[10px] max-[768px]:w-[350px]">
        <Image src='/img/img.png' width={200} height={200} className="pt-3 pb-3 rounded-[100%]"/>
        <h1 className="font-bold text-[20px]">سجاد حسنی کاخ</h1>
        <h1 className="font-bold text-[17px] mt-3">علاقه : فرانت - اند</h1>
        <div className="link_navbar w-full flex flex-col mt-5 ">
            <ul className="flex justify-between items-center bg-[#1a1a1acc] text-[#fff] rounded-[8px] m-2 pt-1 pb-1 px-3">
                <Link href='/'>صفحه اصلی</Link>
                <IoHomeOutline/>
            </ul>
            <ul className="flex justify-between items-center bg-[#1a1a1acc] text-[#fff] rounded-[8px] m-2 pt-1 pb-1 px-3">
                <Link href='/AboutMe'>درباره من</Link>
                <SiAboutdotme/>
            </ul>
            <ul className="flex justify-between items-center bg-[#1a1a1acc] text-[#fff] rounded-[8px] m-2 pt-1 pb-1 px-3">
                <Link href='/'>نمونه کارها</Link>
                <IoHomeOutline/>
            </ul>
            <ul className="flex justify-between items-center bg-[#1a1a1acc] text-[#fff] rounded-[8px] m-2 pt-1 pb-1 px-3">
                <Link href='/'>تماس با من</Link>
                <MdWorkOutline/>
            </ul>
        </div>
    </div>
  )
}

export default NavbarRout
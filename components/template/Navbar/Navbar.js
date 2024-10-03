import React from "react";
import "./Navbar.css";
import { IoMdHome } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="container">
        <nav className="navItem max-[768px]:hidden">
          <div className="nav flex justify-center items-center gap-[70px] pt-4 pb-4">
            <Link href='/' className="font-bold">صفحه اصلی</Link>
            <Link href='/' className="font-bold">درباره من</Link>
            <Link href='/' className="font-bold">نمونه کارها</Link>
            <Link href='/' className="font-bold">تماس با من</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

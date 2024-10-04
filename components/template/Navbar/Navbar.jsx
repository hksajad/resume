"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container">
        <nav className="navbarPage max-[768px]:max-w-[300px]">
          <ul className="menuItem flex justify-center items-center gap-10 pt-5 pb-5">
            <div className="link_menu">
              <Link
                href="/"
                className="font-bold text-[25px] max-[768px]:hidden"
              >
                صفحه اصلی
              </Link>
              <FaHome className="hidden text-[25px] max-[768px]:flex" />
            </div>
            <div className="link_menu">
              <Link
                href="/"
                className="font-bold text-[20px] max-[768px]:hidden"
              >
                درباره من
              </Link>
              <SiAboutdotme className="hidden text-[25px] max-[768px]:flex" />
            </div>
            <div className="link_menu">
              <Link
                href="/"
                className="font-bold text-[20px] max-[768px]:hidden"
              >
                نمونه کار
              </Link>
              <CgWorkAlt className="hidden text-[25px] max-[768px]:flex" />
            </div>
            <div className="link_menu">
              <Link
                href="/"
                className="font-bold text-[20px] max-[768px]:hidden"
              >
                تماس با من
              </Link>
              <IoMdContact className="hidden text-[25px] max-[768px]:flex" />
            </div>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

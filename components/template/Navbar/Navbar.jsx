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
      <nav className="NavbarPage max-[768px]:max-w-[300px]">
        <ul className="menu flex justify-center items-center pt-5 pb-5">
          <div className="link flex gap-12 max-[768px]:gap-7">
            <Link
              href="/"
              className="font-bold text-[20px] max-[768px]:text-[30px]"
            >
              <h1 className="max-[768px]:hidden"> صفحه اصلی</h1>
              <FaHome className="hidden max-[768px]:flex" />
            </Link>
            <Link
              href="/"
              className="font-bold text-[20px] max-[768px]:text-[30px]"
            >
              <h1 className="max-[768px]:hidden"> درباره من</h1>
              <SiAboutdotme className="hidden max-[768px]:flex" />
            </Link>
            <Link
              href="/"
              className="font-bold text-[20px] max-[768px]:text-[30px]"
            >
              <h1 className="max-[768px]:hidden"> نمونه کار</h1>
              <CgWorkAlt className="hidden max-[768px]:flex" />

            </Link>
            <Link
              href="/"
              className="font-bold text-[20px] max-[768px]:text-[30px]"
            >
              <h1 className="max-[768px]:hidden"> تماس با من</h1>
              <IoMdContact className="hidden max-[768px]:flex" />

            </Link>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

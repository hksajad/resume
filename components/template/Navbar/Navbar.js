"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <section id="navbar">
      <nav className="NavbarPage max-[768px]:max-w-[350px]">
        <ul className="menu flex justify-center items-center pt-5 pb-5">
          <div className="link flex gap-12 max-[768px]:gap-7">
            <Link href="/" className="font-bold text-[20px] max-[768px]:text-[15px]">
              صفحه اصلی
            </Link>
            <Link href="/" className="font-bold text-[20px] max-[768px]:text-[15px]">
              درباره ما
            </Link>
            <Link href="/" className="font-bold text-[20px] max-[768px]:text-[15px]">
              نمونه کار
            </Link>
            <Link href="/" className="font-bold text-[20px] max-[768px]:text-[15px]">
              تماس با ما
            </Link>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

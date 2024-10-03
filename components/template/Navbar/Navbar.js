import React from "react";
import "./Navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <section id="navbar">
      <nav className="NavbarPage">
        <ul className='menu flex justify-around items-center pt-3 pb-3'>
          <div className='link flex gap-9'>
            <Link href='/' className='font-bold'>صفحه اصلی</Link>
            <Link href='/' className='font-bold'>درباره ما</Link>
            <Link href='/' className='font-bold'>نمونه کار</Link>
            <Link href='/' className='font-bold'>تماس با ما</Link>
          </div>
          <div className='dark_light'>سلام</div>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

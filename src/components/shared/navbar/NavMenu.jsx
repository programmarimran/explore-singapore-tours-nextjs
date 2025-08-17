import React from 'react';
import Link from "next/link";
const NavMenu = () => {
   
    return (
      <div className=" hidden md:flex justify-center items-center gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/tours"}>Tours</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
    );
};

export default NavMenu;
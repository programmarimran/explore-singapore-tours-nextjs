"use client";
import Image from "next/image";
import React, { use } from "react";
import logoImage from "@/assets/logo.png";
import CustomizedSwitches from "../../ui/CustomizedSwitches";
import { ThemeContext } from "@/assets/context/themeContext";
import SwipeableTemporaryDrawer from "./Hambarger";
import NavMenu from "./NavMenu";
// import banner from "@/assets/banner.jpg";

const Navbar = () => {
  const { themeToggle } = use(ThemeContext);

  return (
    <div className=" bg-white text-black ">
      <div className=" flex w-11/12 mx-auto  justify-between items-center">
        <Image className=" w-46 py-2" src={logoImage} alt="logo image" />
       <NavMenu/>
        <div className=" flex items-center gap-4">
          <div onClick={() => themeToggle()}>
            <CustomizedSwitches />
          </div>
          <div className=" md:hidden">
            <SwipeableTemporaryDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

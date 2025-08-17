"use client";
import Image from "next/image";
import React, { use } from "react";
import logoImage from "@/assets/logo.png";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import CustomizedSwitches from "../ui/CustomizedSwitches";
import { ThemeContext } from "@/assets/context/themeContext";
// import banner from "@/assets/banner.jpg";

const Navbar = () => {
  const { themeToggle } = use(ThemeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" bg-white text-black ">
      <div className=" w-11/12 mx-auto flex justify-between items-center">
        <Image className=" w-46 py-2" src={logoImage} alt="logo image" />
        <div className=" flex justify-center items-center gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <div>
            <Button
              id="basic-button" 
              className=" !text-black"
              aria-controls={open ? "" : undefined}
              aria-haspopup="true" 
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
        <div onClick={() => themeToggle()}>
          <CustomizedSwitches />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

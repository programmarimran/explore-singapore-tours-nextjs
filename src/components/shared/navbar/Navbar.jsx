"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logoImage from "@/assets/singlelogo.png";
import CustomizedSwitches from "../../ui/CustomizedSwitches";
import SwipeableTemporaryDrawer from "./Hambarger";
import NavMenu from "./NavMenu";
import { useTheme } from "@/app/theme-provider";

const Navbar = () => {
 const { theme, toggleTheme } = useTheme();
 console.log(theme)
  // const toggleTheme = () => {};
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                src={logoImage}
                alt="Singapore Tours Logo"
                width={56}
                height={56}
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                Singapore Tours
              </h2>
              <p className="text-xs text-orange-500 font-medium">
                Explore the Lion City
              </p>
            </div>
          </Link>
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavMenu />
            <div className="flex items-center space-x-6 border-l border-gray-200 dark:border-gray-700 pl-6">
              {/* Search Button */}
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
                  <span>🇬🇧</span>
                  <span>EN</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Theme Toggle */}
              <div onClick={toggleTheme} className="cursor-pointer">
                <CustomizedSwitches />
              </div>

              {/* CTA Button */}
              <Link
                href="/tours"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Book Tour
              </Link>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Search Button Mobile */}
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Theme Toggle Mobile */}
            <div onClick={toggleTheme} className="cursor-pointer">
              <CustomizedSwitches />
            </div>

            {/* Mobile Menu Button */}
            <SwipeableTemporaryDrawer />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/book-now"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Book Your Tour Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar on Scroll */}
      <div
        className={`h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  );
};

export default Navbar;

"use client";
import React from 'react';
import Link from 'next/link';
import logoImage from "@/assets/singlelogo.png"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Singapore Tours Section */}
          <div className="space-y-4">
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
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/tours/marina-bay" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Marina Bay Tour With Gardens
                </Link>
              </li>
              <li>
                <Link 
                  href="/tours/sentosa-island" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Sentosa Island Tour With Universal
                </Link>
              </li>
              <li>
                <Link 
                  href="/tours/cultural-heritage" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Cultural Heritage Tour With Chinatown
                </Link>
              </li>
              <li>
                <Link 
                  href="/tours/night-safari" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Night Safari Tour With Zoo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Community Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/press" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/partnerships" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Get in touch
                </Link>
              </li>
              <li>
                <Link 
                  href="/support" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Social
            </h3>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>

              <Link 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.473-3.342-1.245-.894-.772-1.484-1.814-1.484-3.013 0-1.199.59-2.241 1.484-3.013.894-.772 2.045-1.245 3.342-1.245 1.297 0 2.448.473 3.342 1.245.894.772 1.484 1.814 1.484 3.013 0 1.199-.59 2.241-1.484 3.013-.894.772-2.045 1.245-3.342 1.245z"/>
                </svg>
              </Link>

              <Link 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>

              <Link 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Stay Updated
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                />
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Copyright © Explore Singapore Tours 2024 | Developed By{' '}
                <Link 
                  href="https://growthlinkbd.com" 
                  target="_blank"
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Growth Link
                </Link>
              </p>
            </div>

            {/* Help Button */}
            <div className="flex items-center space-x-4">
             

              {/* Payment Methods */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  DC
                </div>
                <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                  PP
                </div>
                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  UPI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
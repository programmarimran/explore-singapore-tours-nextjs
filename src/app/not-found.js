// src/app/not-found.js
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-9xl font-extrabold text-black mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Page Not Found
      </h2>
      <p className="text-lg mb-8 text-black max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        href="/"
        className="bg-emerald-500 text-black font-bold py-3 px-6 rounded-full hover:bg-emerald-400 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

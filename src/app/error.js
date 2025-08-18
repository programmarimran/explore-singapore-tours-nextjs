// src/app/error.js

"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootError({ error, reset }) {
  useEffect(() => {
    console.error("Error caught in RootError:", error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
      <Link href={"/"}>
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-400 transition-colors duration-300 transform hover:scale-105">
            Back to home
          </button>
         </Link>
    </div>
  );
}

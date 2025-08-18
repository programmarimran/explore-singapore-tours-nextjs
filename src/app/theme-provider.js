"use client";

import { createContext, useState, useContext, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();

// Custom Hook
export const useTheme = () => useContext(ThemeContext);

// Provider Component
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // apply theme to html root
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

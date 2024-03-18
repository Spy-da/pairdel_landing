"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed right-[20px] md:right-[36px] bottom-[12px] ">
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <Image src="/night.svg" width={64} height={64} alt="Dark Mode" className="w-[32px] h-auto md:w-full" />
        ) : (
          <Image src="/day.svg" width={64} height={64} alt="Light Mode" className="w-[32px] h-auto md:w-full"/>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

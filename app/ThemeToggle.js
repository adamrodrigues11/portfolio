"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TbMoon, TbSun, TbCircle } from 'react-icons/tb'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <div className="hidden md:block">
            <TbCircle size={25} />
        </div>
    );
  }

  return (
    <div className="hidden md:block">
      {theme === "dark" ? (
        <TbSun size={25} onClick={() => setTheme("light")} />
        ) : (
        <TbMoon size={25} onClick={() => setTheme("dark")} />
        )
      }
    </div>
  );
};

export default ThemeToggle;
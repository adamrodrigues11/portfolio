"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TbMoon, TbSun } from 'react-icons/tb'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // listen for system theme changes, and override theme value saved in local storage (since I give priority to system theme)
  // eventually we can update this when next-themes supports system theme detection in the useTheme hook
  // useEffect(() => {
  //   setTheme(systemTheme);
  // }, [systemTheme, setTheme]);

  if (!mounted) {
    return (
        <div className='cursor-pointer'>
            <TbMoon size={25} />
        </div>
    );
  }

  return (
    <div className='cursor-pointer hover:scale-105 transition'>
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
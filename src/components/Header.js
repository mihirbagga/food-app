import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../themeConfig";

const Header = () => {
  const { theme, toggleDarkMode } = useTheme();

  let navItems = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
    { title: "Cart", link: "/cart" },
    { title: "About", link: "/about" },
  ];

  // State to track whether the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to add event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 0px
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run this effect once on component mount

  return (
    <div
      className={`p-2 mb-2 h-12 items-center flex flex-row justify-between bg-slate-500  ${
        scrolled ? "fixed top-0 left-0 right-0 z-10" : "" // Apply "fixed" class if scrolled
      }`}
    >
      <h1 className="text-lg font-bold">Order Now 🍔 </h1>
      <div className="flex flex-row gap-8 m-4">
        {navItems.map((ele, index) => (
          <Link key={index} to={ele.link}>
            {ele.title}
          </Link>
        ))}
        <label onClick={() => toggleDarkMode()}>
          {theme === "dark" ? "🌝" : "🌓"}
        </label>
      </div>
    </div>
  );
};

export default Header;

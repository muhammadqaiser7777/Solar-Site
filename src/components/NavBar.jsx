import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/form", label: "Get Quote" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="p-4 bg-primary text-teritory fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container flex justify-between h-16 mx-auto">
        {/* Logo */}
        <div className="flex items-center p-2">
          <Link to="/" className="cursor-pointer text-lg font-bold">
            <img src={Logo} alt="USA SOLARS LOGO" className="h-24 w-auto" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="flex justify-end p-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-stretch space-y-3 md:space-y-0 md:space-x-3 absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent md:top-0 p-4 md:p-0`}
        >
          {menuItems.map((item) => (
            <li key={item.path} className="flex">
              <Link
                to={item.path}
                className="block w-full px-4 py-4 cursor-pointer hover:text-heading hover-animated-border"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

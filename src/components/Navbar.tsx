import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/idealogo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Que hacemos", href: "Features" },
    { id: 2, text: "Que ofrecemos", href: "WhatWeOffer" },
    { id: 3, text: "Testimonios", href: "Testimonial" },
    { id: 4, text: "Contacto", href: "Contact" },
  ];

  return (
    <nav className=" px-4 flex justify-around items-center bg-gradient-to-r from-orange-300 to-[#d2b57f]">
      <img src={Logo} alt="" className="h-40" />
      {/* Desktop Navigation */}
      {location.pathname.length > 1 ? (
        <Link
          to={"/"}
          className="p-4 font-bold text-slate-600 hover:bg-orange-300 hover:shadow-lg rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
        >
          Volver al Inicio
        </Link>
      ) : (
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              reloadDocument
              to={`${location.search}#${item.href}`}
              key={item.id}
            >
              <li className="p-4 font-bold text-slate-600 hover:bg-orange-300 hover:shadow-lg rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                {item.text}
              </li>
            </Link>
          ))}
          <Link
            to="/nosotros"
            className="p-4 font-bold text-slate-600 hover:bg-orange-300 hover:shadow-lg rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            Nosotros
          </Link>
          <Link
            to="/blog"
            className="p-4 font-bold text-slate-600 hover:bg-orange-300 hover:shadow-lg rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            Blog
          </Link>
        </ul>
      )}
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-amber-100 ease-in-out duration-500"
            : "fixed md:hidden top-0 h-full w-[60%] border-r border-r-gray-900 bg-amber-100 ease-in-out duration-500 left-[-100%] right-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <img src={Logo} alt="" className="h-20" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <a href={item.href} className="w-[100%]">
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-amber-400 duration-300 hover:text-black cursor-pointer border-gray-600"
              onClick={handleNav}
            >
              {item.text}
            </li>
          </a>
        ))}
        <Link
          to="/blog"
          className="p-4 border-b rounded-xl hover:bg-amber-400 duration-300 hover:text-black cursor-pointer border-gray-600"
        >
          Blog
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

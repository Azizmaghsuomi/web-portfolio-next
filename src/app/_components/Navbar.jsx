"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

import Logo from "@/public/images/Aziz-name-icon-darkmood.png";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 border border-[#33353F] left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex lg:py-4 flex-wrap items-center py-2 justify-between mx-auto p-4">
        <Link href={"/"} className="w-14 md:w-28">
          {" "}
          <Image
            src={Logo}
            width={80}
            height={100}
            alt="Logo"
            className="hover:scale-105 duration-300"
          />
        </Link>
        <div
          className="block mobile-munu md:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {!navbarOpen ? (
            <button className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 rounded hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 rounded hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-4 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

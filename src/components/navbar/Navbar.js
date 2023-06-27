import React from "react";
import Container from "../Container";
import MenuItem from "./MenuItem";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-6 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3  md:gap-0">
            <h1 className="flex flex-row justify-center items-center text-xl font-bold color text-[#2d2e32]">
              <div
                className="mr-2 cursor-pointer md:hidden"
                onClick={handleToggle}
              >
                <MenuIcon fontSize="large" />
                <div
                  className={`burger-menu fixed top-0 left-0 w-full h-full overflow-hidden transition-transform duration-300 ease-in-out ${
                    isOpen
                      ? "transform translate-x-0"
                      : "transform -translate-x-full"
                  }`}
                >
                  <ul className="menu-items fixed top-0 left-0 w-full h-full bg-gray-200 flex flex-col items-center justify-center list-none">
                    <li onClick={() => scrollToSection("homeRef")}>
                      <MenuItem item="Home" />
                    </li>
                    <li onClick={() => scrollToSection("aboutRef")}>
                      <MenuItem item="About" />
                    </li>
                    <li onClick={() => scrollToSection("projectRef")}>
                      <MenuItem item="Project" />
                    </li>
                    <li onClick={() => scrollToSection("contactRef")}>
                      <MenuItem item="Contact" />
                    </li>
                  </ul>
                </div>
              </div>
              <ArrowBackIosIcon fontSize="small" />
              Hung.Dev <span className="text-sm">/</span>
              <ArrowForwardIosIcon fontSize="small" />
            </h1>
            <ul className="hidden md:flex flex-row gap-6">
              <li onClick={() => scrollToSection("homeRef")}>
                <MenuItem item="Home" />
              </li>
              <li onClick={() => scrollToSection("aboutRef")}>
                <MenuItem item="About" />
              </li>
              <li onClick={() => scrollToSection("projectRef")}>
                <MenuItem item="Project" />
              </li>
              <li onClick={() => scrollToSection("contactRef")}>
                <MenuItem item="Contact" />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </nav>
  );
}

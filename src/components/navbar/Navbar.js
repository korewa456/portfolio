import React from "react";
import Container from "../Container";
import MenuItem from "./MenuItem";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Navbar({ scrollToSection }) {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-6 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3  md:gap-0">
            <h1 className="flex flex-row justify-center items-center text-xl font-bold color text-[#2d2e32]">
              <ArrowBackIosIcon fontSize="small" />
              Hung.Dev <span className="text-sm">/</span>
              <ArrowForwardIosIcon fontSize="small" />
            </h1>
            <ul className="flex flex-row gap-6">
              <li onClick={() => scrollToSection("homeRef")}>
                <MenuItem item="Home" />
              </li>
              <li onClick={() => scrollToSection("aboutRef")}>
                <MenuItem item="About" />
              </li>
              <li onClick={() => scrollToSection("projectRef")}>
                <MenuItem item="Project" />
              </li>
              <li>
                <MenuItem item="Contact" />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </nav>
  );
}
import React from "react";
import Container from "../Container";
import MenuItem from "./MenuItem";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm">
      <div className="py-6 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <h1 className="text-xl font-bold color text-[#2d2e32]">
              &lt; Hung.Dev /&gt;
            </h1>
            <ul className="flex flex-row gap-6">
              <li>
                <MenuItem item="Home" />
              </li>
              <li>
                <MenuItem item="About" />
              </li>
              <li>
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

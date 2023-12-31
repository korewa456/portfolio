import React from "react";
import Container from "./Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoData from "./LogoData";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Home(props) {
  return (
    <section className="pt-24 bg-slate-100 w-full">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex justify-center flex-col gap-3">
            <h1 className="text-6xl font-semibold text-slate-700">
              Fullstack React
            </h1>
            <h1 className="text-6xl font-semibold text-slate-700">Developer</h1>
            <h3 className="text-xl text-[#555]">
              Hi, I'm Hung Jen. A passionate FullStack React
            </h3>
            <h3 className="text-xl text-[#555]">
              Developer based in Irvine, California. <LocationOnIcon />
            </h3>
            <div className="flex gap-3">
              <a href="https://github.com/korewa456" target="_blank">
                <GitHubIcon
                  fontSize="large"
                  sx={{ "&:hover": { color: "#3f51b5" } }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/hung-jen-liao-682149235/"
                target="_blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  sx={{ "&:hover": { color: "#3f51b5" } }}
                />
              </a>
            </div>
          </div>
          <div className="hero-img !w-64 !h-64 md:!w-[24rem] md:!h-[24rem]"></div>
        </div>
        <hr className="m-2" />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">My TechStack</h2>
          <ul className="flex flex-wrap flex-row gap-3 justify-center items-center p-8">
            {LogoData.map((logo) => (
              <li className="flex justify-center items-center h-20 w-20 border-2 rounded-[50%] shadow-lg">
                <img
                  src={logo.default}
                  alt="logo of techstack"
                  className="h-12 w-12"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

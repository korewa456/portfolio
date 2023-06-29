import React from "react";
import airbnb from "../Media/preview/airbnbPreview.png";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = React.forwardRef((props, ref) => {
  const airbnbStack = [
    require("../Media/techstack/nextjslogo.svg"),
    require("../Media/techstack/reactlogo.svg"),
    require("../Media/techstack/tailwindlogo.svg"),
    require("../Media/techstack/nodejslogo.svg"),
    require("../Media/techstack/mongodblogo.svg"),
  ];

  return (
    <article className="max-w-7xl mt-20 md:h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:place-items-center md:py-60 px-4">
      <div className="mb-3 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-2 justify-start w-full p-5">
          {props.techStack.map((logo) => (
            <img src={logo.default} className="w-12 h-12" />
          ))}
        </div>
        <div class="relative">
          <img
            src={props.previewImage}
            alt="airbnb-clone"
            className="w-[32rem] h-[20rem]  rounded-2xl border-4 shadow-md cursor-pointer hover:opacity-100:"
          />
          <a href={props.demoLink} target="_blank">
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,99.4%,0.4)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
          {props.title}
        </h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          {props.description}
        </p>
        <div className="flex flex-col gap-3">
          <a href={props.demoLink} target="_blank">
            <button
              type="button"
              className="bg-white w-full p-2 border-2 border-black shadow-md hover:bg-slate-200"
            >
              <LaunchIcon /> Live Demo
            </button>
          </a>
          <a href={props.githubLink} target="_blank">
            <button
              type="button"
              className="bg-white w-full p-2 border-2 border-black shadow-md hover:bg-slate-200"
            >
              <GitHubIcon /> GitHub Repository
            </button>
          </a>
        </div>
      </div>
    </article>
  );
});

export default Project;

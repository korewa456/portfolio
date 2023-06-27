import React from "react";
import projectData from "./projectData";
import Project from "./Project";

const projectPage = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center bg-slate-100 w-full"
    >
      <div className="flex justify-center pt-20">
        <h2 className="bg-white px-2 text-slate-700 uppercase tracking-wide text-2xl font-bold inline-block rounded shadow mb-10">
          My Projects
        </h2>
      </div>
      {projectData.map((data) => (
        <Project
          title={data.title}
          description={data.description}
          techStack={data.techStack}
          previewImage={data.previewImage}
          demoLink={data.demoLink}
          githubLink={data.githubLink}
        />
      ))}
    </section>
  );
});

export default projectPage;

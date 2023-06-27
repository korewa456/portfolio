import React from "react";
import projectData from "./projectData";
import Project from "./Project";

const projectPage = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-slate-100 w-full">
      <div className="flex justify-center pt-20 mb-10">
        <h2 className="bg-white px-2 text-slate-700 uppercase tracking-wide text-2xl font-bold inline-block rounded shadow">
          My Projects
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectData.map((data) => (
            <Project
              key={data.title}
              title={data.title}
              description={data.description}
              techStack={data.techStack}
              previewImage={data.previewImage}
              demoLink={data.demoLink}
              githubLink={data.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default projectPage;

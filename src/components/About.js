import React, { useState } from "react";
import ima from "../Media/pfp.webp";
import porin from "../Media/cat/Porin.jpg";
import ginTonic from "../Media/cat/Gin tonic.jpg";

const About = React.forwardRef((props, ref) => {
  const [curPic, setCurPic] = useState(porin);

  return (
    <section ref={ref} className="bg-slate-100 w-full">
      <div className="flex justify-center pt-20 mb-10">
        <h2 className="bg-slate-100 px-2 text-slate-700 uppercase tracking-wide text-2xl font-bold inline-block rounded shadow">
          ABOUT ME
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="px-8 pb-10">
          <h1 className="text-black mb-10 font-bold text-3xl lg:text-4xl">
            An aspiring Fullstack Developer based in Irvine, California
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            As an aspiring Fullstack developer, I possess a diverse skill set
            encompassing front-end and back-end technologies. I am proficient in
            HTML, CSS, JavaScript, and have experience with frameworks like
            React. I also have knowledge of server-side programming languages
            such as Python or Node.js. With my expertise, I am capable of
            designing and developing visually appealing and interactive user
            interfaces. I am eager to learn and grow as a Fullstack developer,
            constantly seeking new challenges and opportunities to enhance my
            skills. I am also an owner of two happy cats, a Scottish straight
            named Porin, and a Scottish fold named Gin Tonic.
          </p>
        </article>
        <article className="justify-center md:block flex flex-col">
          <div className="mb-3 flex flex-col justify-center items-center">
            {curPic === porin ? (
              <h2 className="text-2xl font-bold text-slate-600">Porin</h2>
            ) : (
              <h2 className="text-2xl font-bold text-slate-600">Gin Tonic</h2>
            )}

            <img
              src={curPic}
              alt=""
              className="w-[50%] md:w-[20rem] lg:w-[25rem] md:h-[20rem] lg:h-[25rem] rounded-2xl"
            />
          </div>

          <ul className="flex flex-row items-center justify-center gap-5 flex-wrap mt-5">
            <li
              onClick={() => setCurPic(porin)}
              className={`${
                curPic === porin && "border-2 border-blue-400 opacity-80"
              } border-2 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center`}
            >
              <img src={porin} alt="" className="w-20" />
            </li>
            <li
              onClick={() => setCurPic(ginTonic)}
              className={`${
                curPic === ginTonic && "border-2 border-blue-400 opacity-80"
              } border-2 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center`}
            >
              <img src={ginTonic} alt="" className="w-20" />
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
});

export default About;

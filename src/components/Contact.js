import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const Contact = React.forwardRef((props, ref) => {
  return (
    <section
      className="flex flex-col gap-10 justify-center items-center py-20"
      ref={ref}
    >
      <div className="flex justify-center pt-20">
        <h2 className="bg-slate-100 px-2 text-slate-700 uppercase tracking-wide text-2xl font-bold inline-block rounded shadow mb-10">
          Contact Me
        </h2>
      </div>

      <h2 className="text-2xl font-semibold">I am happy to talk</h2>
      <h2 className="text-2xl font-semibold">hit me up!👇</h2>
      <a href="mailto: hungjen0816@gmail.com">
        <button
          type="button"
          className="rounded-2xl  bg-[#2196f3] hover:bg-[#4dabf5] shadow-lg"
        >
          <div className="flex flex-row items-center gap-3 my-2 mx-4 text-white">
            <EmailIcon fontSize="large" />
            <div className="flex flex-col items-start">
              <h1 className="text-2xl">Mail</h1>
              <h3 className="text-xl">hungjen0816@gmail.com</h3>
            </div>
          </div>
        </button>
      </a>
    </section>
  );
});

export default Contact;

import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black w-screen h-56 justify-evenly ">
      <div className="flex flex-col justify-center items-center">
        <div className="text-white px-12">
          Copyright © 2023. All rights are reserved
        </div>
      </div>
    </div>
  );
}

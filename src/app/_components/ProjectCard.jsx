import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl.src})`, // استفاده از imgUrl.src
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="w-14 h-14 border-2 mr-2 relative rounded-full border-[#ABD7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ABD7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="w-14 h-14 border-2 relative rounded-full border-[#ABD7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ABD7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4  min-h-[150px]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ABD7BE] overflow-hidden">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

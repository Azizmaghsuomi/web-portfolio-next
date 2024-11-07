"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { animate, motion, useInView } from "framer-motion";

import Image1 from "@/public/images/projects/1.png";
import Image2 from "@/public/images/projects/2.png";
import Image3 from "@/public/images/projects/3.png";
import Image4 from "@/public/images/projects/4.png";
import Image5 from "@/public/images/projects/5.png";
import Image6 from "@/public/images/projects/6.png";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: Image1,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: Image2,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: Image3,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: Image4,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: Image5,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "...",
    image: Image6,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const initial = "hidden";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handelChangeTag = (newTag) => {
    setTag(newTag);
  };
  const FiltredProjects = projectsData.filter((c) => c.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handelChangeTag}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handelChangeTag}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {FiltredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial={initial}
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

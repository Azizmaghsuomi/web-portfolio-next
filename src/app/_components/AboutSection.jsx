"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import AboutMeImage from "@/public/images/about-me.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>React js</li>
        <li>Next js</li>
        <li>Git,Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IT SENSE</li>
      </ul>
    ),
  },
  {
    title: "Experianse",
    id: "experianse",
    content: (
      <ul className="list-disc pl-2">
        <li>3 years in frontend coding</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handelTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white scroll-mt-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutMeImage} width={500} height={500} alt="about" />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mg-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <div className="flex flex-row my-2 justify-start">
            <TabButton
              selectTab={() => handelTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handelTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handelTabChange("experianse")}
              active={tab === "experianse"}
            >
              Experianse
            </TabButton>
          </div>
          <div className="mt-8  min-h-[150px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

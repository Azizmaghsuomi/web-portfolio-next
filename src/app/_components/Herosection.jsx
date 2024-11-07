"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Azizphoto from "@/public/images/Aziz-picture.jpg";
import Link from "next/link";

const Herosection = () => {
  return (
    <section className="lg-py-16">
      <div className="grid grid-col-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <div className="inline-flex items-center w-[200px] sm:w-[250px] h-[50px] lg:h-[70px]">
              <TypeAnimation
                sequence={[
                  "Aziz",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="whitespace-nowrap text-xl lg:text-6xl"
              />
            </div>
          </h1>

          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 text-base sm:text-lg">
            Frontend developer based in Tehran.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 text-center inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/resume_aziz.pdf"
              download="resume_aziz.pdf"
              className="px-1 text-center inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src={Azizphoto}
              alt="Aziz,عزیز"
              width={300}
              height={300}
              className="rounded-full  shadow-[0_0_14px_#0f2961]  absolute transform lg:w-[300px] lg:h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;

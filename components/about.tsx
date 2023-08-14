"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[60rem] text-justify leading-8 sm:mb-30 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working as a{" "}
        <span className="font-medium">Banquet Supervisor in an hotel</span>, I
        decided to pursue my passion for programming. I watched videos on
        YouTube and read documentations and learned{" "}
        <span className="font-medium">Backend/Mobile development</span>.{" "}
        <span className="italic">Solving problems with code </span> is something
        I enjoy doing. I <span className="underline">love</span> the feeling of
        seeing a functional application that brings about solution to a problem.
        My core stack includes{" "}
        <span className="font-medium">
          Python, FastAPI, Django, PostgreSQL, JavaScript, React Native
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time or contract position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football, watching movies, reading books.
      </p>
    </motion.section>
  );
}

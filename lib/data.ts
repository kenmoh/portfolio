import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import app from "@/public/app.png";
import pizza from "@/public/pizza.jpg";
import vacancy from "@/public/vacancy.jpg";
import reservation from "@/public/reservation.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "QuickPickup",
    description:
      "A Multi vendor dispatch application with wallet system. This app allow users(Sender) to list item for and have dispatch rider pick it up for delivery. A wallet is created for each registered user. Upon delivery confirmation by the sender, the wallet is credited.",
    tags: [
      "FastAPI",
      "JWT",
      "Postgresql",
      "SQLAlchemy",
      "React Native",
      "Docker",
    ],
    imageUrl: app,
  },
  {
    title: "Restaurant reservations API",
    description:
      "This REST API allow users to register and make reservations in a restaurant. The restaurant owner(s) is/are able to set the restaurant capacity. When the restaurant is occupied, user get a prompt telling them the restaurant is fully booked. Roles are assigned to restaurant staff to confirm and cancel reservations.",
    tags: ["FastAPI", "JWT", "Postgresql", "SQLAlchemy"],
    imageUrl: reservation,
  },
  {
    title: "Pizza Ordering REST API",
    description:
      "This API allow user to register and order for Pizza. Pizza are grouped in SMALL, MEDIUM and LARGE sizes.The restaurant owner can also set other sizes dynamically. Users can cancel order within a time frame that is set by the Pizza restaurant so as to avoid cacelling an already prepared order.",
    tags: ["FastAPI", "JWT", "Postgresql", "SQLAlchemy"],
    imageUrl: pizza,
  },
  {
    title: "JobEx",
    description:
      "Full stack job listing web app for posting vacancies. It has Employers and Employees as types of users. Employee users can add work experience, education and other details. Employer users can add profile and list vacancies.",
    tags: ["Django", "Postgresql", "Bootstrap"],
    imageUrl: vacancy,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Tailwind",
  "Redux",
  "PostgreSQL",
  "Python",
  "Django",
  "FastAPI",
  "SQLAlchemy",
  "SQLModel",
  "Docker",
] as const;

// export const projectsData = [
//   {
//     title: "QuickPickup",
//     imageUrl: app,
//     tags: [
// "FastAPI",
// "JWT",
// "Postgresql",
// "SQLAlchemy",
// "React Native",
// "Docker",
//     ],
//     url: "https://mohdelivery.onrender.com/docs",
//     description:
//       "A Multi vendor dispatch application with wallet system. This app allow users(Sender) to list item for and have dispatch rider pick it up for delivery. A wallet is created for each registered user. Upon delivery confirmation by the sender, the wallet is credited.",
//   },
//   {
//     title: "ReserveIt",
//     imageUrl: reservation,
//     tags: ["FastAPI", "JWT", "Postgresql", "SQLAlchemy"],
//     url: "https://github.com/kenmoh/restaurant_reservation_api/tree/main/backend",
//     description:
//       "This REST API allow users to register and make reservations in a restaurant. The restaurant owner(s) is/are able to set the restaurant capacity. When the restaurant is occupied, user get a prompt telling them the restaurant is fully booked. Roles are assigned to restaurant staff to confirm and cancel reservations.",
//   },
//   {
//     title: pizza,
//     imageUrl: "/src/assets/pizza.jpg",
//     tags: ["FastAPI", "JWT", "Postgresql", "SQLAlchemy"],
//     url: "https://github.com/kenmoh/pizza_app",
//     description:
//       "This API allow user to register and order for Pizza. Pizza are grouped in SMALL, MEDIUM and LARGE sizes.The restaurant owner can also set other sizes dynamically. Users can cancel order within a time frame that is set by the Pizza restaurant so as to avoid cacelling an already prepared order.",
//   },
//   {
//     title: "Jobify",
//     imageUrl: vacancy,
//     tags: ["Django", "Postgresql", "Bootstrap"],
//     url: "https://github.com/kenmoh/jobex",
//     description:
//       "Full stack job listing web app for posting vacancies. It has Employers and Employees as types of users. Employee users can add work experience, education and other details. Employer users can add profile and list vacancies.",
//   },
// ];

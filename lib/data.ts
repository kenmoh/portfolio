import React from "react";
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

  {
    name: "Contact",
    hash: "#contact",
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
      "Flutterwave",
      "Google Maps",
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
  "Python",
  "Django",
  "FastAPI",
  "SQLAlchemy",
  "SQLModel",
  "Docker",
  "JavaScript",
  "PostgreSQL",
  "Git",
  "Github Action",
  "React Native",
  "React",
  "HTML",
  "CSS",
  "Tailwind",
  "Redux",
  "TypeScript",
] as const;

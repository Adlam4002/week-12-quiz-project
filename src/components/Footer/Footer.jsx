"use client";

import Link from "next/link";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

const Footer = () => {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-md text-slate-200 p-4 bottom-0 shadow-[rgba(0,0,15,0.5)_0px_-2px_14px_-2px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="flex">
          <Link
            href="https://www.linkedin.com/in/alex-adlam-3456b3a5"
            className="flex"
          >
            Alex Adlam
          </Link>{" "}
          -{" "}
          <Link
            href="https://www.linkedin.com/in/daniel-szabo-455134248/"
            className="flex"
          >
            Daniel Szabo
          </Link>{" "}
          -{" "}
          <Link
            href="https://www.linkedin.com/in/joshua-day-ba1652311/"
            className="flex"
          >
            Joshua Day
          </Link>{" "}
          -{" "}
          <Link
            href="https://github.com/Adlam4002/week-12-quiz-project"
            className="flex"
          >
            Week 12 Assignment - Student Demo
          </Link>
        </h1>
        
      </div>
    </footer>
  );
};

export default Footer;

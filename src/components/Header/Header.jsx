"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Logout } from "@/components/Logout";
import { SignInButton } from "@/components/SignIn";
import { useState, useEffect, useRef } from "react";
import { BarLoader } from "react-spinners";

export default function Header() {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false); //using to track visabillity of dropdown menu

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen); //flips isDropdownOpen state between true and false to open and close the menu

  // menuRef is used to track the bounds of the dropdown menu so we can close it when the user clicks outside of it
  let menuRef = useRef();

  // This useEffect is used to close the dropdown menu when the user clicks outside of it
  useEffect(() => {
    // Define the event handler
    let handler = (e) => {
      // If the click is outside of the menu, close the dropdown
      if (!menuRef.current.contains(e.target)) setDropdownOpen(false);
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handler);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // Fix for the glitching Header on page load
  if (status === "loading") {
    // While the session is being fetched, show this
    return (
      <header className="w-full bg-white bg-opacity-30 backdrop-blur-md text-slate-800 flex flex-col md:flex-row justify-around items-center p-4 h-auto md:h-16 shadow-md">
        <div>
          <Link href="/">
            <Image
              src="/Assets/QuizzieP.png"
              alt="GitHub Logo"
              width={200}
              height={35}
            />
          </Link>
        </div>
        <BarLoader color="#1fcaca" loading width={500} />
      </header>
    );
  }

  if (!session) {
    return (
      <header className="w-full bg-white bg-opacity-30 backdrop-blur-md text-slate-800 flex flex-col md:flex-row justify-around items-center p-4 h-auto md:h-16 shadow-md">
        <div>
          <Link href="/">
            <Image
              src="/Assets/QuizzieP.png"
              alt="GitHub Logo"
              width={200}
              height={35}
            />
          </Link>
        </div>
        <SignInButton />
      </header>
    );
  }

  return (
    <header className="w-full bg-white bg-opacity-30 backdrop-blur-md text-slate-800 flex flex-col md:flex-row justify-around items-center p-4 h-auto md:h-16 shadow-md">
      <div className="mb-2 md:mb-0">
        <Link href="/">
          <Image
            src="/Assets/QuizzieP.png"
            alt="GitHub Logo"
            width={200}
            height={35}
          />
        </Link>
      </div>
      <div className="relative md:hidden" ref={menuRef}>
        <div
          onClick={toggleDropdown}
          className="px-3 py-2 rounded-lg bg-white bg-opacity-50 text-center cursor-pointer"
        >
          Menu
        </div>
        {isDropdownOpen && (
          <nav className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-slate-300 bg-opacity-70 backdrop-blur-md p-4 rounded-lg shadow-lg flex flex-col items-center w-64">
            <Link
              href="/"
              className="px-3 py-2 w-full text-center rounded-lg hover:bg-slate-100"
              onClick={toggleDropdown}
            >
              Home
            </Link>
            <Link
              href="/randomq"
              className="px-3 py-2 w-full text-center rounded-lg hover:bg-slate-100"
              onClick={toggleDropdown}
            >
              Random Question
            </Link>
            <Link
              href="/newquestion"
              className="px-3 py-2 w-full text-center rounded-lg hover:bg-slate-100"
              onClick={toggleDropdown}
            >
              Submit a Question
            </Link>
            <Link
              href="/questionslist"
              className="px-3 py-2 w-full text-center rounded-lg hover:bg-slate-100"
              onClick={toggleDropdown}
            >
              View Questions
            </Link>
            <Link
              href={`/userprofile/${session.user.id}`}
              className="px-3 py-2 w-full text-center rounded-lg hover:bg-slate-100"
              onClick={toggleDropdown}
            >
              My Profile
            </Link>
            <Logout />
          </nav>
        )}
      </div>
      <nav className="hidden md:flex flex-col md:flex-row gap-2 md:gap-4">
        <Link
          href="/"
          className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 text-center"
        >
          Home
        </Link>
        <Link
          href="/randomq"
          className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 text-center"
        >
          Random Question
        </Link>
        <Link
          href="/newquestion"
          className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 text-center"
        >
          Submit a Question
        </Link>
        <Link
          href="/questionslist"
          className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 text-center"
        >
          View Questions
        </Link>
        <Link
          href={`/userprofile/${session.user.id}`}
          className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 text-center"
        >
          My Profile
        </Link>
        <Logout />
      </nav>
    </header>
  );
}

// using md:hidden on the div that contains the dropdown button so the menu only appears on smaller screens
//aas the md:hidden is hiding the elements on screen size medium+. i am also using md:flex on the nav element
// to only show it on screen size medium or higher and hide it on smaller screens.

"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Logout } from "@/components/Logout";
import { SignInButton } from "@/components/SignIn";

export default function Header() {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <header className="w-full bg-white bg-opacity-30 backdrop-blur-md text-slate-800 flex flex-col md:flex-row justify-around items-center p-4 h-16 shadow-md">
        <div>
          <Link href="/">
            <Image
              src="/Assets/QuizziePop.png"
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
            src="/Assets/QuizziePop.png"
            alt="GitHub Logo"
            width={200}
            height={35}
          />
        </Link>
      </div>
      <nav className="flex flex-col md:flex-row gap-2 md:gap-4">
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

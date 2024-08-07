import { auth } from "@/auth";
import { useSession } from "next-auth/react"; // Make sure to import useSession from "next-auth/react"
import Link from "next/link";
import Image from "next/image";
import { Logout } from "@/components/Logout";
import { SignInButton } from "@/components/SignIn";
import { motion } from "framer-motion";
// import React, { createContext } from 'react';

import styles from "./styles.module.css";

export default async function Header() {
  const session = await auth();

  if (!session) {
    return (
      </*motion.*/ header
        className={`${styles.header}`}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div>
          <Image
            src="/Assets/QuizziePop.Png"
            alt="GitHub Logo"
            width={500}
            height={70}
          />
        </div>
        <SignInButton />
      </header>
    );
  }

  return (
    <header className={`${styles.header}`}>
      <div>
        <Image
          src="/Assets/QuizziePop.Png"
          alt="GitHub Logo"
          width={500}
          height={70}
        />
      </div>
      <nav>
        <ul className={`${styles.ul}`}>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/randomq">Random Question</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/newquestion">Submit a Question</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href="/questionslist">View Questions</Link>
            </button>
          </li>
          <li>
            <button className={`${styles.button}`}>
              <Link href={`/userprofile/${session.user.id}`}>My Profile</Link>
            </button>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    </header>
  );
}

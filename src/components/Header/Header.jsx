import { auth } from "@/auth";
import { useSession } from "next-auth/react"; // Make sure to import useSession from "next-auth/react"
import Link from "next/link";
import Image from "next/image";
import { Logout } from "@/components/Logout";
import { SignInButton } from "@/components/SignIn";

import styles from "./styles.module.css";

export default async function Header() {
  const session = await auth();

  if (!session) {
    return (
      <header className={`${styles.header}`}>
        <div>
          <h1 className="title">QuizziePop! </h1>
        </div>
        <SignInButton />
      </header>
    );
  }

  return (
    <header className={`${styles.header}`}>
      <div>
        <h1 className="title">QuizziePop! </h1>
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
              <Link href="/questionslist">List of Questions</Link>
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

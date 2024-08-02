import { Logout } from "@/components/Logout";
import QuizzComponent from "@/components/QuizzComponent";
import { SignInButton } from "@/components/SignIn";
import Image from "next/image";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <main className="text-center text-lg font-bold text-white flex flex-col items-center">
        {" "}
        {/* border-solid border-2 */}
        <div className="flex flex-col items-center w-72">
          <h1>Welcome to QuizzyPop!</h1>
          <QuizzComponent />
          {/* Quizz component here */}
          {/* <h1>Hello Guys!</h1>
      <SignInButton />
      <Logout /> */}
        </div>
      </main>
    </>
  );
}

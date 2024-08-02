import { Logout } from "@/components/Logout";
import { SignInButton } from "@/components/SignIn";
import Image from "next/image";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="text-white">
      <Header></Header>
      <h1>Hello Guys!</h1>
    </main>
  );
}

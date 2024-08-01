import { Logout } from "@/components/Logout";
import { SignInButton } from "@/components/SignIn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
      <h1>Hello Guys!</h1>
      <SignInButton />
      <Logout />
    </main>
  );
}

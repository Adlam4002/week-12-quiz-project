"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <div
      className="px-3 py-2 rounded-lg bg-white bg-opacity-50 md:bg-opacity-0 md:hover:bg-white md:hover:bg-opacity-50 cursor-pointer "
      onClick={() => signIn()}
    >
      Sign in
    </div>
  );
}

"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <div
      className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 cursor-pointer"
      onClick={() => signIn()}
    >
      Sign in
    </div>
  );
}

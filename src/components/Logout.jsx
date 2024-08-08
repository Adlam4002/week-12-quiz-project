
"use client";

import { signOut } from "next-auth/react";

export const Logout = () => (
  <div
    className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-50 cursor-pointer text-center"
    onClick={() => signOut()}
  >
    Sign out
  </div>
);

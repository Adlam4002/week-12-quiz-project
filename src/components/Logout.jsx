// import { signOut } from "@/auth";

// export function Logout() {
//   async function handleLogout() {
//     "use server";
//     await signOut();
//   }

//   return (
// <form action={handleLogout} className="inline ">
//   <button>Logout</button>
// </form>
//   );
// }
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

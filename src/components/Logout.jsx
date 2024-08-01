import { signOut } from "@/auth";

export function Logout() {
  async function handleLogout() {
    "use server";
    await signOut();
  }

  return (
    <form action={handleLogout} className="inline">
      <button>Logout</button>
    </form>
  );
}

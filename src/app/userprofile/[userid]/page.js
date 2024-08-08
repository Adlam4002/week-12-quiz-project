import { auth } from "@/auth";
import UserGrid from "@/components/UserGrid";
import Shuffler from "@/components/Shuffler";
import { SignInButton } from "@/components/SignIn";
import { db } from "@/db";

export default async function UserProfilePage() {
  const session = await auth();
  const userId = session?.user?.id;
  const response = await db.query(
    `
    select * from users where id = $1`,
    [userId]
  );
  const userInformation = response.rows[0];
  console.log(userInformation);
  const qdata = await db.query(
    `
    select * from quiz_questions where user_id =$1
    `,
    [userId]
  );
  const questionsData = qdata.rows;
  console.log(questionsData);
  if (!session) {
    return (
      <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4 m-4">
        <div className="text-center text-gray-700">
          Please log in to view your profile!
          <br />
          <SignInButton />
        </div>
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg space-y-4 w-fit mx-auto m-4">
      <div className="w-full text-center">
        <h1 className="text-xl font-bold text-gray-700">
          Welcome: {userInformation.name}
        </h1>
      </div>
      <div className="w-full">
        <h1 className="text-center text-xl font-bold text-gray-700">
          Your questions:
        </h1>
      </div>
      <UserGrid data={questionsData} />
    </main>
  );
}

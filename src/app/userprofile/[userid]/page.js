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
      <div className="flex items-center flex-col">
        Please log in to view your profile!
        <br />
        <SignInButton />
      </div>
    );
  }
  return (
    <main>
      <div className="flex justify-center">
        <div id="user-info">
          <h1>Welcome: {userInformation.name}</h1>
          <h1>Your average score is : ###</h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Your questions:</h1>
        <UserGrid data={questionsData} />
      </div>
    </main>
  );
}

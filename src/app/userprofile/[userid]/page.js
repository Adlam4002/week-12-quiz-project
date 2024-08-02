import { auth } from "@/auth";
import { db } from "@/db";

export default async function UserProfilePage() {
  const session = await auth();
  const userId = session.user.id;
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
        {questionsData.map((item) => (
          <div id="question-display" key={item.id}>
            <div id="thequestion">{item.question}</div>
            <div id="answers-boxes">
              <div id="profile-correct-answer">{item.correct_answer}</div>
              <div>{item.answer_2}</div>
              <div>{item.answer_3}</div>
              <div>{item.answer_4}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

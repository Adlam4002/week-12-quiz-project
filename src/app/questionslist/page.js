import Grid from "@/components/Grid";
import { db } from "@/db";
import Link from "next/link";

export default async function QuestionsListPage() {
  let response = await db.query(`
         SELECT quiz_questions.id, question, correct_answer , answer_2 , answer_3 , answer_4 , category, difficulty, COALESCE(users.name, 'Robo-question') AS username FROM quiz_questions

        LEFT JOIN users ON quiz_questions.user_id = users.id
     
          `);
  const data = response.rows;
  console.log(data);
  return (
    <main id="question-list-page" className="flex flex-col items-center ">
      {" "}
      <div>
        <Grid data={data} />
      </div>
      {/* <div className="flex flex-col items-center">
        {data.map((item) => (
          <>
            <Link href={`/questionslist/${item.id}`} key={item.id}>
              <p
                className="text-2xl"
                id="question-list"
                dangerouslySetInnerHTML={{ __html: item.question }}
              ></p>
            </Link>
            <br />
          </>
        ))}
      </div> */}
    </main>
  );
}

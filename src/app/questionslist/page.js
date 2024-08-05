import { db } from "@/db";
import Link from "next/link";

export default async function QuestionsListPage() {
  let response = await db.query(`
       SELECT * FROM quiz_questions 
        `);
  const data = response.rows;
  //   console.log(data);
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {data.map((item) => (
          <>
            <Link href={`/questionslist/${item.id}`} key={item.id}>
              <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
            </Link>
            <br />
          </>
        ))}
      </div>
    </main>
  );
}

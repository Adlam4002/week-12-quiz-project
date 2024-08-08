import Grid from "@/components/Grid";
import { db } from "@/db";
import Link from "next/link";

export default async function QuestionsListPage() {
  let response = await db.query(`
         SELECT quiz_questions.id, question, correct_answer , answer_2 , answer_3 , answer_4 , category, difficulty, COALESCE(users.name, 'Robo-question') AS username FROM quiz_questions

        LEFT JOIN users ON quiz_questions.user_id = users.id
     
          `);
  let data = response.rows;
  data.forEach((item) => {
    item.question = item.question.replaceAll("&amp;", "&");
    item.question = item.question.replaceAll("&quot;", '"');
    item.question = item.question.replaceAll("&#039;", "'");
    item.category = item.category.replaceAll("&amp;", "&");
    item.category = item.category.replaceAll("&quot;", '"');
    item.category = item.category.replaceAll("&#039;", "'");
    item.correct_answer = item.correct_answer.replaceAll("&amp;", "&");
    item.correct_answer = item.correct_answer.replaceAll("&quot;", '"');
    item.correct_answer = item.correct_answer.replaceAll("&#039;", "'");
    item.answer_2 = item.answer_2.replaceAll("&amp;", "&");
    item.answer_2 = item.answer_2.replaceAll("&quot;", '"');
    item.answer_2 = item.answer_2.replaceAll("&#039;", "'");
    item.answer_3 = item.answer_3.replaceAll("&amp;", "&");
    item.answer_3 = item.answer_3.replaceAll("&quot;", '"');
    item.answer_3 = item.answer_3.replaceAll("&#039;", "'");
    item.answer_4 = item.answer_4.replaceAll("&amp;", "&");
    item.answer_4 = item.answer_4.replaceAll("&quot;", '"');
    item.answer_4 = item.answer_4.replaceAll("&#039;", "'");
  });
  
  return (
    <main id="question-list-page" className="flex flex-col items-center ">
      {" "}
      <div>
        <Grid data={data} />
      </div>
    
    </main>
  );
}

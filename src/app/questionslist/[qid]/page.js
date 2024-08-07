import Shuffler from "@/components/Shuffler";
import { db } from "@/db";
import CommentsSection from "@/components/CommentSection/CommentSection";

export default async function QuestionsListIdPage({ params }) {
  const response = await db.query(`
        SELECT * FROM quiz_questions WHERE id=${params.qid}
        `);
  const data = response.rows[0];
  const answers = [
    data.correct_answer,
    data.answer_2,
    data.answer_3,
    data.answer_4,
  ];
  console.log(data);
  return (
    <main className="flex flex-col items-center">
      <div id="question-display" className="shadow-lg">
        <div
          id="thequestion"
          dangerouslySetInnerHTML={{ __html: data.question }}
        ></div>
        <div id="answers-boxes">
          <Shuffler answers={answers} />
        </div>
      </div>
      <CommentsSection questionId={params.qid} />
    </main>
  );
}

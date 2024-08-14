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
  return (
    <main className="w-80 mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4 m-4">
      <div
        /*id="question-display"*/ className="text-center text-lg font-semibold text-white bg-blue-700 rounded-lg py-2 px-4 shadow-md min-w-full"
      >
        <div
          // id="thequestion"
          className="p-4 "
          dangerouslySetInnerHTML={{ __html: data.question }}
        ></div>
      </div>
      <div
        /*id="answers-boxes"*/ className="text-center text-lg font-semibold text-white bg-blue-500 rounded-lg py-2 px-4 min-w-full shadow-md"
      >
        <Shuffler answers={answers} />
      </div>
      <CommentsSection questionId={params.qid} />
    </main>
  );
}

import React from "react";
import QuizzComponent from "@/components/QuizzComponent";
import { db } from "@/db";

export default async function RandomQPage() {
  const response = await db.query(
    `select question, correct_answer, answer_2, answer_3, answer_4  from quiz_questions ORDER BY RANDOM() FETCH FIRST 1 ROWS ONLY`
  );
  const data = response.rows;
  return (
    <>
      <main className="text-center text-lg font-bold text-white flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1>Random Question!</h1>
          <QuizzComponent params={data} />
        </div>
      </main>
    </>
  );
}

import React from "react";
import { db } from "@/db";
import { auth } from "@/auth";
import QuizzComponent from "@/components/QuizzComponent";
import { redirect } from "next/navigation";

export default async function QuizPage({ params }) {
  const session = auth();
  if (!session) {
    redirect("/");
  }
  // Decode the URI to get the category, %20 is replaced with a space and %3A is replaced with a colon
  let decodeSettings = decodeURIComponent(params.settings[0]);
  // Replace the & with &amp; bc in the db the & is encoded as &amp;
  const encodedStr = decodeSettings.replace("&", "&amp;");

  const response = await db.query(
    `select question, correct_answer, answer_2, answer_3, answer_4  from quiz_questions where category = $1 and difficulty = $2 ORDER BY RANDOM() FETCH FIRST $3 ROWS ONLY`,
    [encodedStr, params.settings[1], params.settings[2]]
  );
  const data = response.rows;

  return (
    <main className="text-center text-lg font-bold text-white flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>Poppin&apos; time!</h1>
        <QuizzComponent params={data} />
      </div>
    </main>
  );
}

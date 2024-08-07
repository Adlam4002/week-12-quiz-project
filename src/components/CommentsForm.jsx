import { db } from "@/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CommentsForm({ qid }) {
  const session = await auth();
  let question_id = qid;
  async function handleSubmit(formData) {
    "use server";
    let user_id = session?.user?.id;
    let comment = formData.get("comment");
    await db.query(
      `
            INSERT INTO comments (comment, user_id, question_id)
            VALUES ($1, $2, $3)
            `,
      [comment, user_id, qid]
    );
    revalidatePath(`/questionslist/${qid}`);
    redirect(`/questionslist/${qid}`);
  }
  return (
    <div className="w-9/10 md:w-3/5">
      <form
        action={handleSubmit}
        className="  m-2 p-2 rounded shadow-lg bg-slate-600 flex-col flex items-center"
      >
        <lable htmlFor="comment">Leave a comment?</lable>
        <textarea
          className="text-black m-2 md:w-auto"
          type="text"
          name="comment"
          placeholder="Type your comment here..."
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

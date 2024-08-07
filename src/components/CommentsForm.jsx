import { db } from "@/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function CommentsForm({qid}){
    const session = await auth();
     let question_id =qid
    async function handleSubmit(formData){
        "use server"
        let user_id = session?.user?.id;
        let comment = formData.get("comment")
        await db.query(`
            INSERT INTO comments (comment, user_id, question_id)
            VALUES ($1, $2, $3)
            `, [comment, user_id, qid ])
    revalidatePath(`/questionslist/${qid}`)
    redirect(`/questionslist/${qid}`)
    }
    return(<div>
        <form action={handleSubmit} className=" border-2 p-3 rounded shadow-lg bg-slate-600">
            <lable htmlFor="comment" >Leave a comment?</lable>
            <input className="text-black m-2" type="text" name="comment" placeholder="Type your comment here..." required/>
            <button>Submit</button>
        </form>
    </div>
    )
}


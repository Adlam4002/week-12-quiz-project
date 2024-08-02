import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SignInButton } from "./SignIn";
import { auth } from "@/auth";

export default async function QuestionForm() {
  const session = await auth();
  async function handleQuestion(formData) {
    "use server";
    const question = formData.get("question");
    const correct_answer = formData.get("correct_answer");
    const answer_2 = formData.get("answer_2");
    const answer_3 = formData.get("answer_3");
    const answer_4 = formData.get("answer_4");
    const category = formData.get("category");
    const difficulty = formData.get("difficulty");
    const userId = session?.user?.id;

    if (!userId) {
      throw new Error("You need to login to submit a question");
    }

    await db.query(
      `
        INSERT INTO quiz_questions (question, correct_answer, answer_2, answer_3, answer_4, category, difficulty, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `,
      [
        question,
        correct_answer,
        answer_2,
        answer_3,
        answer_4,
        category,
        difficulty,
        userId,
      ]
    );
    // these are placeholder locations and when a profile page and questionlist exists they will need to be updated
    revalidatePath("/");
    redirect("/");
  }
  if (!session) {
    return (
      <div>
        Please log in to submit a question!
        <br />
        <SignInButton />
      </div>
    );
  }
  return (
    <>
      <form
        action={handleQuestion}
        className="flex flex-col p-16 space-y-2 text-black items-center"
      >
        {" "}
        <h1 className="text-white text-xl">
          Please enter your question below{" "}
        </h1>
        <label className="text-white" htmlFor="question">
          Please enter your question:
        </label>
        <textarea
          name="question"
          className="text-black px-3 py-2 rounded"
          placeholder="How many legs does a dog have?"
          required
        />
        <label className="text-white" htmlFor="correct_answer">
          Enter the correct answer:
        </label>
        <input
          type="text"
          name="correct_answer"
          required
          placeholder="4"
        ></input>
        <label className="text-white" htmlFor="answer_2">
          Enter an inccorect answer:
        </label>
        <input type="text" name="answer_2" required placeholder="2"></input>
        <label className="text-white" htmlFor="answer_3">
          Enter another inccorect answer:
        </label>
        <input type="text" name="answer_3" required placeholder="6"></input>
        <label className="text-white" htmlFor="answer_4">
          Enter another inccorect answer:
        </label>
        <input type="text" name="answer_4" required placeholder="3"></input>
        <label className="text-white" htmlFor="category">
          Pick a category
        </label>
        <select name="category" required>
          <option value="">Pick one...</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Entertainment: Books">Entertainment: Books</option>
          <option value="Entertainment: Film">Entertainment: Film</option>
          <option value="Entertainment: Music">Entertainment: Music</option>
          <option value="Entertainment: Musicals & Theatres">
            Entertainment: Musicals & Theatres
          </option>
          <option value="Entertainment: Television">
            Entertainment: Television
          </option>
          <option value="Entertainment: Video Games">
            Entertainment: Video Games
          </option>
          <option value="Entertainment: Board Games">
            Entertainment: Board Games
          </option>
          <option value="Entertainment: Comics">Entertainment: Comics</option>
          <option value="Entertainment: Japanese Anime & Manga">
            Entertainment: Japanese Anime & Manga
          </option>
          <option value="Entertainment: Cartoon & Animations">
            Entertainment: Cartoon & Animations
          </option>
          <option value="Science & Nature">Science & Nature</option>
          <option value="Science: Computers">Science: Computers</option>
          <option value="Science: Mathematics">Science: Mathematics</option>
          <option value="Science: Gadgets">Science: Gadgets</option>
          <option value="Mythology">Mythology</option>
          <option value="Sports">Sports</option>
          <option value="Geography">Geography</option>
          <option value="History">History</option>
          <option value="Polotics">Polotics</option>
          <option value="Art">Art</option>
          <option value="Celebrity">Celebrity</option>
          <option value="Animals">Animals</option>
          <option value="Vehicles">Vehicles</option>
        </select>
        <label className="text-white" htmlFor="difficulty">
          Difficulty
        </label>
        <select name="difficulty" required>
          <option value="">Pick a difficulty...</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button>Submit!</button>
      </form>
    </>
  );
}

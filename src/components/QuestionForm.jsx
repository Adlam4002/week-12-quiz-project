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

    revalidatePath("/questionslist");
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
        className="w-80 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4 m-4"
      >
        <h1 className="text-center text-xl font-bold text-gray-700">
          Please enter your question below
        </h1>
        <label className="text-gray-700" htmlFor="question">
          Please enter your question:
        </label>
        <textarea
          name="question"
          className="w-full p-2 border rounded-lg text-gray-700"
          placeholder="How many legs does a dog have?"
          required
        />
        <label className="text-gray-700" htmlFor="correct_answer">
          Enter the correct answer:
        </label>
        <input
          type="text"
          name="correct_answer"
          required
          placeholder="4"
          className="w-full p-2 border rounded-lg text-gray-700"
        />
        <label className="text-gray-700" htmlFor="answer_2">
          Enter an incorrect answer:
        </label>
        <input
          type="text"
          name="answer_2"
          required
          placeholder="2"
          className="w-full p-2 border rounded-lg text-gray-700"
        />
        <label className="text-gray-700" htmlFor="answer_3">
          Enter another incorrect answer:
        </label>
        <input
          type="text"
          name="answer_3"
          required
          placeholder="6"
          className="w-full p-2 border rounded-lg text-gray-700"
        />
        <label className="text-gray-700" htmlFor="answer_4">
          Enter another incorrect answer:
        </label>
        <input
          type="text"
          name="answer_4"
          required
          placeholder="3"
          className="w-full p-2 border rounded-lg text-gray-700"
        />
        <label className="text-gray-700" htmlFor="category">
          Pick a category
        </label>
        <select
          name="category"
          required
          className="w-full p-2 border rounded-lg text-gray-700"
        >
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
          <option value="Politics">Politics</option>
          <option value="Art">Art</option>
          <option value="Celebrities">Celebrities</option>
          <option value="Animals">Animals</option>
          <option value="Vehicles">Vehicles</option>
        </select>
        <label className="text-gray-700" htmlFor="difficulty">
          Difficulty
        </label>
        <select
          name="difficulty"
          required
          className="w-full p-2 border rounded-lg text-gray-700"
        >
          <option value="">Pick a difficulty...</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Submit!
        </button>
      </form>
    </>
  );
}

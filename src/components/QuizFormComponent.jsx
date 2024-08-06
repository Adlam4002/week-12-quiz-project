import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function QuizFormComponent() {
  async function handleQuestion(formData) {
    "use server";
    let category = formData.get("category");
    console.log(category);
    const difficulty = formData.get("difficulty");
    console.log(difficulty);
    const numberOfQuestions = formData.get("numberOfQuestions");
    console.log(numberOfQuestions);
    category = encodeURI(category);
    console.log(`/quiz/${category}/${difficulty}/${numberOfQuestions}`);

    revalidatePath(`/quiz/${category}/${difficulty}/${numberOfQuestions}`);
    redirect(`/quiz/${category}/${difficulty}/${numberOfQuestions}`);
  }
  return (
    <form
      action={handleQuestion}
      className="flex flex-col p-16 space-y-2 text-black items-center"
    >
      {" "}
      <h1 className="text-white text-xl">Set up your Quiz </h1>
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
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <label className="text-white" htmlFor="numberOfQuestions">
        Number of Questions
      </label>
      <input
        type="number"
        name="numberOfQuestions"
        required
        placeholder="1"
        min="1"
        max="20"
      ></input>
      <button>Let&apos;s start popping!</button>
    </form>
  );
}

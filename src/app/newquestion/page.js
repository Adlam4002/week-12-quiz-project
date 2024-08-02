import Header from "@/components/Header/Header";
import QuestionForm from "@/components/QuestionForm";

export default async function NewQuestionPage() {
  return (
    <>
      <main className="flex justify-center">
        <QuestionForm />
      </main>
    </>
  );
}

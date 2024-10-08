"use client";

import React, { useEffect, useState, useMemo } from "react";

export default function QuizzComponent({ params }) {
  // Need params for the question, answers, and correct answer, question number out of total questions
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showCurrentAnswer, setShowCurrentAnswer] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [question, setQuestion] = useState("");

  const data = params;
  const [answer_2, setAnswer_2] = useState("");
  const [answer_3, setAnswer_3] = useState("");
  const [answer_4, setAnswer_4] = useState("");
  const [correct_answer, setCorrectAnswer] = useState("");

  // useEffect to set the question, answers, and correct answer when the active question changes and sets the server and client to the same state
  useEffect(() => {
    setQuestion(data[activeQuestion].question);
    setAnswer_2(data[activeQuestion].answer_2);
    setAnswer_3(data[activeQuestion].answer_3);
    setAnswer_4(data[activeQuestion].answer_4);
    setCorrectAnswer(data[activeQuestion].correct_answer);
  }, [activeQuestion, data]);

  // useMemo is used to prevent the answers from being randomized every time the component re-renders
  const answers = useMemo(() => {
    return [correct_answer, answer_2, answer_3, answer_4].sort(
      () => Math.random() - 0.5
    );
  }, [correct_answer, answer_2, answer_3, answer_4]); // Randomize the answers to prevent the correct answer from always being in the same position

  const onAnswerSelect = (answer, index) => {
    setSelectedAnswerIndex(index);
    setChecked(true);
    if (answer === correct_answer) {
      setSelectedAnswer(true);

  
    } else {
      setSelectedAnswer(false);


    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setShowCurrentAnswer(true);
    if (selectedAnswer) {
      setResult({
        ...result,
        score: result.score + 1,
        correctAnswers: result.correctAnswers + 1,
      });
    } else {
      setResult({
        ...result,
        wrongAnswers: result.wrongAnswers + 1,
      });
    }

    // Wait 2 seconds before moving to the next question
    setTimeout(() => {
      if (activeQuestion + 1 < data.length) {
        setActiveQuestion(activeQuestion + 1);
      } else {
        setActiveQuestion(0);
        setShowResults(true);
      }
      setSelectedAnswerIndex(null);
      setSelectedAnswer("");
      setChecked(false);
      setShowCurrentAnswer(false);
    }, 2000);
  };

  return (
    <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-lg">
      {!showResults ? (
        <>
          <div className="mb-4">
            <h2 className="text-center text-xl font-bold text-gray-700">
              {activeQuestion + 1}/{data.length}
            </h2>
          </div>
          <div className="mb-6">
            <h3 className="text-center text-lg font-semibold text-white bg-blue-700 rounded-lg py-2 px-4">
              <div dangerouslySetInnerHTML={{ __html: question }} />
              {/* Use Html.Raw() to handle signs like " &quot; */}
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between flex-wrap">
              {!showCurrentAnswer
                ? answers.map((answer, index) => (
                    <div
                      key={index}
                      onClick={() => onAnswerSelect(answer, index)}
                      className={
                        selectedAnswerIndex === index
                          ? "flex-1 cursor-pointer py-2 px-6 m-1 bg-blue-900 text-white rounded-lg hover:bg-blue-600 "
                          : "flex-1 cursor-pointer py-2 px-6 m-1 bg-blue-500 text-white rounded-lg hover:bg-blue-900"
                      }
                    >
                      <div dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                  ))
                : // If the answer is correct, display the correct answer in green, otherwise display the selected answer in red and the correct answer in green
                  answers.map((answer, index) => (
                    <div
                      key={index}
                      className={
                        selectedAnswerIndex === index
                          ? answer === correct_answer
                            ? "flex-1 cursor-pointer py-2 px-6 m-1 bg-green-600  text-white rounded-lg "
                            : "flex-1 cursor-pointer py-2 px-6 m-1 bg-red-600 text-white rounded-lg "
                          : answer === correct_answer
                          ? "flex-1 cursor-pointer py-2 px-6 m-1 bg-green-600  text-white rounded-lg "
                          : "flex-1 cursor-pointer py-2 px-6 m-1 bg-blue-500 text-white rounded-lg hover:bg-blue-900"
                      }
                    >
                      <div dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                  ))}
            </div>
          </div>
          <div>
            {checked ? (
              showCurrentAnswer ? (
                <button
                  disabled
                  onClick={nextQuestion}
                  className="w-full py-2 px-4 bg-green text-white rounded-lg hover:bg-blue-600"
                >
                  {selectedAnswerIndex === question.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="w-full py-2 px-4 bg-green text-white rounded-lg hover:bg-blue-600"
                >
                  {selectedAnswerIndex === question.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              )
            ) : (
              <button
                disabled
                onClick={nextQuestion}
                className="w-full py-2 px-4 bg-green text-white rounded-lg hover:bg-blue-600"
              >
                {selectedAnswerIndex === question.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            )}
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-center text-2xl font-bold text-gray-700">
            Results
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-center text-lg font-semibold text-gray-700">
              You scored {result.score} out of {data.length}
            </p>
            <p className="text-center text-lg font-semibold text-gray-700">
              Correct Answers: {result.correctAnswers}
            </p>
            <p className="text-center text-lg font-semibold text-gray-700">
              Wrong Answers: {result.wrongAnswers}
            </p>
            <p className="text-center text-lg font-semibold text-gray-700">
              Percentage: {((result.score / data.length) * 100).toFixed(2)}%
            </p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
}


"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function QuizzComponent({ params }) {
  // Need params for the question, answers, and correct answer, question number out of total questions
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const data = params;
  const { question, correct_answer, incorrect_answers } = data[activeQuestion];
  // Use  @Html.Raw() to render the data

  return (
    <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-lg">
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
        <div className="flex justify-between space-x-4">
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <div dangerouslySetInnerHTML={{ __html: incorrect_answers[0] }} />
          </button>
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <div dangerouslySetInnerHTML={{ __html: incorrect_answers[1] }} />
          </button>
        </div>
        <div className="flex justify-between space-x-4">
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <div dangerouslySetInnerHTML={{ __html: incorrect_answers[2] }} />
          </button>
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <div dangerouslySetInnerHTML={{ __html: correct_answer }} />
          </button>
        </div>
      </div>
      <div>
        <button className="w-full py-2 px-4 bg-green text-white rounded-lg hover:bg-blue-600 focus:ring-gray-400">
          Next
        </button>
      </div>
    </div>
  );
}

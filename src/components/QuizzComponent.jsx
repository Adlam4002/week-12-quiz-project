import React from "react";

export default function QuizzComponent({ params }) {
  // Need params for the question, answers, and correct answer, question number out of total questions
  return (
    <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-center text-xl font-bold text-gray-700">1/3</h2>
      </div>
      <div className="mb-6">
        <h3 className="text-center text-lg font-semibold text-white bg-blue-700 rounded-lg py-2 px-4">
          What is the capital of France?
        </h3>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between space-x-4">
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Paris
          </button>
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            London
          </button>
        </div>
        <div className="flex justify-between space-x-4">
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Berlin
          </button>
          <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Madrid
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

// "use client";

import QuizzComponent from "@/components/QuizzComponent";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
// import { useState, useEffect } from "react";
import { db } from "@/db";

export default async function Home() {
  // const data = await fetchData();
  const response = await db.query(
    `select question, correct_answer, answer_2, answer_3, answer_4  from quiz_questions where category = 'Entertainment: Japanese Anime &amp; Manga' and difficulty = 'easy' ORDER BY RANDOM() FETCH FIRST 3 ROWS ONLY`
  );
  const data = response.rows;
  // console.log(data);

  // Fetch data from the API using useState and useEffect hooks to handle the loading state of the data
  // The reason for loading state is to prevent the page from crashing if the data is not fetched
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getData(retries = 3, delay = 1000) {
  //     // 3 retries with 1 second delay to prevent too many requests to the API
  //     const fetchedData = await fetchData();
  //     if (fetchedData) {
  //       // If data is fetched, set the data and loading state to false
  //       setData(fetchedData);
  //       setLoading(false);
  //     } else {
  //       setTimeout(() => getData(retries - 1, delay * 2), delay); // If data is not fetched, retry fetching the data after 1 second delay
  //       console.log("No data fetched");
  //     }
  //   }
  //   getData(); // Call the function to fetch the data
  // }, []);

  // if (loading === false) {
  //   console.log("It did load");
  // }

  return (
    <>
      <main className="text-center text-lg font-bold text-white flex flex-col items-center">
        {" "}
        {/* border-solid border-2 */}
        <div className="flex flex-col items-center">
          <h1>Welcome to QuizzyPop!</h1>
          <QuizzComponent params={data} />
          {/* Quizz component here */}
          {/* <h1>Hello Guys!</h1>
      <SignInButton />
      <Logout /> */}
        </div>
      </main>
    </>
  );
}

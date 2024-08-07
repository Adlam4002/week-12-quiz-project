// "use client";

import QuizzComponent from "@/components/QuizzComponent";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
// import { useState, useEffect } from "react";
import { db } from "@/db";
import { auth } from "@/auth";
import QuizFormComponent from "@/components/QuizFormComponent";

export default async function Home() {
  const session = await auth();
  // If the user is not logged in, display the initial 3 quiz questions
  if (!session) {
    const response = await db.query(
      `select question, correct_answer, answer_2, answer_3, answer_4  from quiz_questions where category = 'Entertainment: Japanese Anime &amp; Manga' and difficulty = 'easy' ORDER BY RANDOM() FETCH FIRST 3 ROWS ONLY`
    );
    const data = response.rows;
    return (
      <>
        <main className="text-center text-lg font-bold text-white flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1>Welcome to QuizzyPop!</h1>
            <QuizzComponent params={data} />
          </div>
        </main>
      </>
    );
  }

  // const data = await fetchData();

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
      <div className="h-4/5 w-full">
        <main className="text-center text-lg font-bold text-white flex flex-col items-center">
          <div className="flex flex-col items-center">
            {/* <h1>Welcome to QuizzyPop!</h1> */}
            <Image
              src="/Assets/QuizzieGifOrange.gif"
              alt="QuizziePop Logo"
              unoptimized={false} // {false} | {true}
              width={250}
              height={250}
            />
            <QuizFormComponent />
          </div>
        </main>
      </div>
    </>
  );
}

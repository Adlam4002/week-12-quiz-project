# Reflections

## Day 1

On day one of the project, we worked together to produce the planning. We created a Trello board and brainstormed ideas to include in the project. We locked down our idea of the minimum variable product, then came up with ideas for stretch goals we could try to implement once we had our fundamental app finished. We created a few wireframed to get a better idea of how we would format the app and what features we wanted and where they will be. We then all worked on one computer with someone sharing their screen to collaboratively produce our database schema. We figured out what tables we would need to integrate OAuth and created them. We then designed and created tables to track users, questions, scores and comments. We created all relationships in advance as to streamline the process one the databases were ready to be populated. We then created a GitHub repository and ensured all members of the team were collaborators on the project. We created an OAuth application to allow us to utilise authentication on the project. We removed the default content that Next.js created when a project was made. We installed all additional packages required by the project. The repo was then updated, and all members clones the repo to their local machines. We then added some basic styling for buttons. We created log in and log out button components. We ran the site in a development environment to test our authentication and database connection was working. Thankfully it was all successful. We then spend the remaining time of the first day further discussing our desired layout and aesthetics. We also produced a small logo to use within the product.

## Day 2

On day 2 we started coding the app itself. We decided what task each of us would work on and then created branches to make sure we didn’t create conflicts. A header component was created that displayed navigation links across the site. If the user is signed in, they have a sign-out option and if they are signed out, they are presented with a log-in button. Then a user submission form was created so that the users could submit their questions to the database that can be used in future quizzes. The page on which the users submit questions only presents the form to them if they are signed in, if they're signed out they are prompted to log in to submit questions. Some of the form values are typed and some are selected from a dropdown box. The user ID is taken from the NextAuth user session. So that all user-submitted questions are correctly associated with the user that created them. We started writing the quiz component itself. This component will display a question and have answers that users can select.

In the afternoon we did some brainstorming about exactly how and which props we would need at each level and how they would be handled. The quiz component was worked on throughout the afternoon. It fetches questions from an API that contains trivia questions. The user can select their answer and progress to the next question. After they have finished their set of questions they are given their results. We created a logo for our app to give a consistent sense of branding. We also created a user profile page. This is a dynamic page and is navigated to using a button that uses the user’s id to populate the correct URL. On this page, some basic information is displayed about the user and all the questions they have submitted are also visible. In the question display when the correct answer is hovered over the background slowly turn a light green to let you know which answer is right. We spent the initial part of the afternoon session working collaboratively. We then switch to working independently before coming together for more collaborative coding towards the end of the session.

## Day 3

In the morning, we discussed how we would go about retrieving the questions and we decided to pull 500 questions from the API and insert them into our database for ease of access. We produced a Python script to fetch the questions and then insert them into our database on Supabase. We worked as a whole team to refine the Python script. We were using a session token to ensure we did not get duplicate questions inserted into the database. We were fetching the questions in batches of 50 questions every 6 seconds. We formatted it like this as there is a limit on the number of requests (no more than one per five seconds). It was an interesting experience using Python as one team member was familiar with the language. One has a basic understanding, and one has no experience at all. So, it was a good learning activity for the group. Daniel was incredibly helpful in explaining to us what we needed to do. After we set this up, we used it to populate our questions database with 3500 questions from a trivia API. This task essentially took the whole morning but we believe it was a worthwhile pursuit.We ensured that the quiz component was reusable so we could implement it on different pages. We created a page to display a list of all questions. They are presented as a list of links allowing users to visit the page associated with that question. We wanted this to potentially implement comments later. We then spend some time as a team discussing and researching pagination.

## Day 4

At this point we had a working MVP, the users could use the random question page, they can submit questions to the database, the users can sign in and out, and the user can generate a quiz from our pool of questions on our database. We started the morning with a meeting to discuss what we wanted to do for the day. We wanted to have visual feedback when a user answers a question. We wanted the correct answer to be displayed in green and the incorrect answers will be red. This allows the user to track whether they got the question right or not. We also wanted to get the formatting exactly how we envisioned it. We always want the footer to be along the bottom of the screen and the header to be present along the top of the user’s screen. We then changed the question list page. It was previously displaying a long list of all our questions with links to their pages. We implemented a data table to make the data much more readable/user-friendly. Once the table was implemented, we added additional features such as the ability to order the columns and filter some of the columns (we did not add this to all of the columns as it wasn’t necessary, the users can also search within these columns e.g. searching for spots in the categories column and then only seeing questions from that category), and then we set up pagination. This allows the user to decide how many questions are on screen at once (to suit them) and cycle through the pages of the table.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

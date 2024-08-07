# Week 12 Project: Quiz app

A group project by Alex Adlam, Josh Day and Daniel Szabo. For this project we decided to make a quiz app.

If you would like to test this project out for yourself, you can fork this repo. When you’ve done this, you should clone it to your machine. Within the folder you should run `npm install` this will install all of the packages used and required for the project to function.

## A link to our GitHub Repo: https://github.com/Adlam4002/week-12-quiz-project

## A link to our deployed app on Vercel: https://week-12-quiz-project.vercel.app

### Our initial wireframe

![Project wireframe](/public/Wireframe.png)

### Our Trello board

![Project Trello board](/public/Trello%20board.png)

### A Lighthouse report for our site ran on 08/08/2024

![Lighthouse score](/public/Thursday%20Lighthouse%20score.png)

### Our database schema

![Database schema](/public/week%2012%20schema.png)

### Our folder structure for the application

![Folder structure of the project](/public/Folder%20structure.png)

# Problem domains

Engagement in Learning: Traditional learning methods often lack interactivity and immediate engagement, which can demotivate learners. An interactive quiz app can fill this gap by making learning a dynamic and enjoyable experience.

Immediate Feedback: Learners benefit from immediate feedback to understand their mistakes and grasp concepts effectively. A quiz app needs to provide instant results and explanations to foster better understanding and retention.

Variety and Customization: Users have diverse interests and learning needs, which requires the quiz app to offer a wide range of topics and customizable difficulty levels to cater to different knowledge bases and learning speeds.

Accessibility: Ensuring that users from various backgrounds and with different devices can access the app smoothly is crucial for widespread usability.

# User stories

- As a user I want to be able to answer multiple choice question.

- As a user I would like to pick the number of questions in my quiz.

- As a user I would like an indication of whether my answer was correct or not.

- As a user I would like to be able to view a list of all questions.

- As a user I would like to leave feedback on questions.

# Reflections

## Day 1

On day one of the project, we worked together to produce the planning materials. We created a Trello board and brainstormed ideas to include in the project. We locked down our idea of the minimum variable product, then came up with ideas for stretch goals we could try to implement once we had our fundamental app finished. We created a few wireframes to get a better idea of how we would format the app what features we wanted and where they will be. We then all worked on one computer with someone sharing their screen to collaboratively produce our database schema. We figured out what tables we would need to integrate OAuth and created them. We then designed and created tables to track users, questions, and comments. We created all relationships in advance to streamline the process once the databases were ready to be populated. We then created a GitHub repository and ensured all members of the team were collaborators on the project. We created an OAuth application to allow us to utilise authentication on the project. We removed the default content that Next.js created when a project was made. We installed all additional packages required by the project. The repo was then updated, and all members cloned the repo to their local machines. We then added some basic styling for buttons. We created log-in and log-out button components. We ran the site in a development environment to test our authentication and database connection was working. Thankfully it was all successful. We then spend the remaining time of the first day further discussing our desired layout and aesthetics. We also produced a small logo to use within the product.

## Day 2

On day 2 we started coding the app itself. We decided what task each of us would work on and then created branches to make sure we didn’t create conflicts. A header component was created that displayed navigation links across the site. If the user is signed in, they have a sign-out option and if they are signed out, they are presented with a log-in button. Then a user submission form was created so that the users could submit their questions to the database that can be used in future quizzes. The page on which the users submit questions only presents the form to them if they are signed in, if they're signed out they are prompted to log in to submit questions. Some of the form values are typed and some are selected from a dropdown box. The user ID is taken from the NextAuth user session. So that all user-submitted questions are correctly associated with the user that created them. We started writing the quiz component itself. This component will display a question and have answers that users can select.

In the afternoon we did some brainstorming about exactly how and which props we would need at each level and how they would be handled. The quiz component was worked on throughout the afternoon. It fetches questions from an API that contains trivia questions. The user can select their answer and progress to the next question. After they have finished their set of questions they are given their results. We created a logo for our app to give a consistent sense of branding. We also created a user profile page. This is a dynamic page and is navigated to using a button that uses the user’s id to populate the correct URL. On this page, some basic information is displayed about the user and all the questions they have submitted are also visible. In the question display when the correct answer is hovered over the background slowly turn a light green to let you know which answer is right. We spent the initial part of the afternoon session working collaboratively. We then switch to working independently before coming together for more collaborative coding towards the end of the session.

## Day 3

In the morning, we discussed how we would go about retrieving the questions and we decided to pull 500 questions from the API and insert them into our database for ease of access. We produced a Python script to fetch the questions and then insert them into our database on Supabase. We worked as a whole team to refine the Python script. We were using a session token to ensure we did not get duplicate questions inserted into the database. We were fetching the questions in batches of 50 questions every 6 seconds. We formatted it like this as there is a limit on the number of requests (no more than one per five seconds). It was an interesting experience using Python as one team member was familiar with the language. One has a basic understanding, and one has no experience at all. So, it was a good learning activity for the group. Daniel was incredibly helpful in explaining to us what we needed to do. After we set this up, we used it to populate our questions database with 3500 questions from a trivia API. This task essentially took the whole morning but we believe it was a worthwhile pursuit.We ensured that the quiz component was reusable so we could implement it on different pages. We created a page to display a list of all questions. They are presented as a list of links allowing users to visit the page associated with that question. We wanted this to potentially implement comments later. We then spend some time as a team discussing and researching pagination.

## Day 4

At this point we had a working MVP, the users could use the random question page, they can submit questions to the database, the users can sign in and out, and the user can generate a quiz from our pool of questions on our database. We started the morning with a meeting to discuss what we wanted to do for the day. We wanted to have visual feedback when a user answers a question. We wanted the correct answer to be displayed in green and the incorrect answers will be red. This allows the user to track whether they got the question right or not. We also wanted to get the formatting exactly how we envisioned it. We always want the footer to be along the bottom of the screen and the header to be present along the top of the user’s screen. We then changed the question list page. It was previously displaying a long list of all our questions with links to their pages. We implemented a data table to make the data much more readable/user-friendly. Once the table was implemented, we added additional features such as the ability to order the columns and filter some of the columns (we did not add this to all of the columns as it wasn’t necessary, the users can also search within these columns e.g. searching for spots in the categories column and then only seeing questions from that category), and then we set up pagination. This allows the user to decide how many questions are on screen at once (to suit them) and cycle through the pages of the table.We added a data table to the user page. This is the element that will display the questions submitted by that user. This is like the question list element but doesn’t require the username column as it is used to view the questions you submitted.

We also worked on the home page. It now renderers a 3-question sample quiz if the user is logged out. If the user is signed in then they are greeted with the set-up for making a quiz to play (this involves picking a category, difficulty, and number of questions). During this process, the values of our form were used but they did not match the values in the database. This was due to certain characters being escaped. We used replace() to scrub through the data and swap between the characters we needed and the characters visible to the user. Due to our data containing escaped characters it also affected the data table for questions. The problem was that we fetched roughly 3,500 rows from the database and so had an array of many objects. To get around this we made a for each loop that goes through each item in the array. Within each iteration of the loop each affected property was targeted with a replace() function. This was done on a server component (where the data is fetched) and passed as props into the data table component. This was done as the data table component is a client component. It turns out that we had incorrectly set up our footer formatting and this was identified and corrected during the afternoon. Much of the work done today was done as stints of working solo and then grouping up and figuring things out together.

## Day 5

In the morning, we had a meeting to discuss our plans as we had achieved our MVP. We wanted to change the styling from a simple but nice orange and blue scheme to an animated background made using Framer Motion. We settled on waves of different blues moving around. We decided that we would change the header and footer to match our new styling. We made them transparent so that we could see the background through it. We also changed the layout of all of our display divs, we removed the borders and added shadow to achieve a more subtle transition to other elements. We noticed that in mobile view the tables were a little difficult to read so we changed the formatting to display two columns primarily but made the table scrollable in the y-axis.

We also wanted more than just GitHub as a method of signing in so we implemented Google accounts and Discord accounts to our OAuth set-up. Today we also implemented commenting on the questions. When a user is on a question page, they are presented with a form that allows them to submit a comment. The comments are stored on our database with a reference to the question it is about and the user that submitted it. The comments are displayed along with the username of who submitted it. We created the comment form as a component. While we made this, we tried out the live share feature on VSCode. This allowed all of us to code collaboratively at the same time, it also allowed us to access the localhost version of the site together. This was very useful as we didn’t need to keep sharing our screens as we coded together. We also refactored the code we were using for our sign-in and sign-out functions.

## Day 6

As this was the final day much of the time was spent as a group fine-tuning the project. We went through the code together to correct spelling mistakes. We also tried all different sizes of screens to make sure the layout was okay in all reasonable sizes. We spent time changing the header component into a client component so that we could conditionally render a different header based on screen size. As screen space is at a premium on mobile, we implemented a pop-out menu rather than a header permanently along the top of the screen. We changed the application settings in all our authentication routes to work on our deployed site rather than a local development environment. We then gave our deployment the necessary environment variables to deal with authentication.

# References

https://opentdb.com/ - source for our non-user-generated questions.

AG Grid - used for producing data tables.

Supabase – used as a database provider.

AuthJS – used for authentication.

Framer Motion – animation library used to animate our project.

Images - Josh Day.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

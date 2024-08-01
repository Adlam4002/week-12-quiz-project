-- Next Auth standard tables, see https://authjs.dev/reference/adapter/pg#setup
CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,

  PRIMARY KEY (identifier, token)
);

CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,

  PRIMARY KEY (id)
);

CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,

  PRIMARY KEY (id)
);

-- Questions table
CREATE TABLE quiz_questions (
    id SERIAL PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    answer_2 VARCHAR(255) NOT NULL,
    answer_3 VARCHAR(255) NOT NULL,
    answer_4 VARCHAR(255) NOT NULL,
    category TEXT,
    difficulty TEXT,
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

--  questions Comments table
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    user_id INT REFERENCES users(id),
    question_id INT REFERENCES quiz_questions(id),
    parent_comment_id INT NULL REFERENCES comments(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Votes table
CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    questions_id INT NULL REFERENCES quiz_questions(id),
    vote SMALLINT CHECK (vote IN (-1, 1)),
    vote_type VARCHAR(255) CHECK (vote_type IN ('question', 'comment')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, questions_id, vote_type)
);

-- track scores table
CREATE TABLE quiz_scores (
  id SERIAL PRIMARY KEY, 
  user_id INT REFERENCES users(id),
  score INT
);
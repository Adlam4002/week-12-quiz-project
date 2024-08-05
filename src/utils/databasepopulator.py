import requests
import time
from supabase import create_client, Client

# Supabase credentials replace credentials with own credentials to reuse the utils
url = 'https://ravvnwcreuqnxtsdpysb.supabase.co'
api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdnZud2NyZXVxbnh0c2RweXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MTQ5NTAsImV4cCI6MjAzODA5MDk1MH0.Jhgdl5y2_RV-GDOFkogVwYcVBZnWKkRXj7AacxQGt6M'

supabase: Client = create_client(url, api_key)

# used to create a token to avoid collecting duplicate questions commented out after generating token
#request_token = requests.get(
#   f'https://opentdb.com/api_token.php?command=request')
#request_token = request_token.json()
#print(request_token.token)


# Function to fetch trivia data
def fetch_trivia_data(amount=50):
    response = requests.get(
        f'https://opentdb.com/api.php?amount={amount}&type=multiple&token=ca30f23d449515d804c4741164d2e3191b35b3f2ed8ffc90beff794c976cd9e7'
    )
    if response.status_code == 200:
        return response.json().get('results', [])
    else:
        print(f"Failed to fetch trivia data: {response.status_code}")
        return []


# Requesting fetch for 500 questions in itterations of 10
total_questions = 500
questions_per_request = 50

# Counting total no. collected questions
collected_questions = 0

while collected_questions < total_questions:
    # Fetch a batch of trivia questions
    trivia_data = fetch_trivia_data(questions_per_request)

    if not trivia_data:
        break

# Insert fetched data into database to be reused
    for trivia in trivia_data:
        question = trivia.get('question')
        correct_answer = trivia.get('correct_answer')
        incorrect_answers = trivia.get('incorrect_answers')
        category = trivia.get('category')
        difficulty = trivia.get('difficulty')

        data = {
            "question": question,
            "correct_answer": correct_answer,
            "answer_2": incorrect_answers[0],
            "answer_3": incorrect_answers[1],
            "answer_4": incorrect_answers[2],
            "category": category,
            "difficulty": difficulty
        }

        try:
            response = supabase.table('quiz_questions').insert(data).execute()
            if response.status_code == 201:
                collected_questions += 1
            else:
                print(f"Failed to insert data: {response}")
        except Exception as e:
            print(f"An error occurred: {e}")

    print(f"Collected and inserted {collected_questions} questions so far.")

    # Delay to handle API rate limiting
    time.sleep(6)

print("Data insertion completed.")
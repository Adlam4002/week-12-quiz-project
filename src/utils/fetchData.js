export async function fetchData() {
  const result = await fetch(
    "https://opentdb.com/api.php?amount=3&category=31&difficulty=easy&type=multiple"
  );
  const data = await result.json();
  const wrangledData = data.results;
  return wrangledData;
}

fetchData();

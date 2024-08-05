export default function Shuffler({ answers }) {
  let check = answers.slice();
  // the function bellow is the Durstenfeld shuffle function which is an optimsed version of the Fisher-Yates shuffle. It shuffles in place to so check the correct answer I sliced the array above to have a copy of the original order.
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(answers);
  //   console.log(`OG: ${check}`);
  //   console.log(`Shuf: ${answers}`);
  return (
    <>
      {answers[0] == check[0] ? (
        <div id="profile-correct-answer">{answers[0]}</div>
      ) : (
        <div>{answers[0]}</div>
      )}
      {answers[1] == check[0] ? (
        <div id="profile-correct-answer">{answers[1]}</div>
      ) : (
        <div>{answers[1]}</div>
      )}
      {answers[2] == check[0] ? (
        <div id="profile-correct-answer">{answers[2]}</div>
      ) : (
        <div>{answers[2]}</div>
      )}
      {answers[3] == check[0] ? (
        <div id="profile-correct-answer">{answers[3]}</div>
      ) : (
        <div>{answers[3]}</div>
      )}
    </>
  );
}
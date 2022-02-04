export default async function Card(cardElement) {
  const bookmarkIcon = getQuerySelector('bookmark');
  const bookmarkButton = getQuerySelector('bookmarkButton');
  const questionText = getQuerySelector('question');
  const correctAnswer = getQuerySelector('correct-answer');

  const incorrectAnswerOne = getQuerySelector('answer-one');
  const incorrectAnswerTwo = getQuerySelector('answer-two');
  const incorrectAnswerThree = getQuerySelector('answer-three');

  const answerText = getQuerySelector('answer-Text');
  const answerButton = getQuerySelector('answer-button');

  const response = await fetch(
    'https://opentdb.com/api.php?amount=3&category=9&difficulty=medium&type=multiple'
  ).catch(error => console.error(error));
  const data = await response.json();

  createQuestions(data.results);

  function createQuestions(questions) {
    questions.forEach(question => {
      incorrectAnswerOne.textContent = question.incorrect_answers[0];
      incorrectAnswerTwo.textContent = question.incorrect_answers[1];
      incorrectAnswerThree.textContent = question.incorrect_answers[2];
      questionText.textContent = question.question.replaceAll('&quot;', "'");
      correctAnswer.textContent = question.correct_answer;
      answerText.textContent = question.correct_answer;
    });
  }

  bookmarkButton.addEventListener('click', () => {
    if (bookmarkIcon.src.includes('bookmark-empty')) {
      bookmarkIcon.src = './images/bookmark-filled.svg';
    } else {
      bookmarkIcon.src = './images/bookmark-empty.svg';
    }
  });

  answerButton.addEventListener('click', () => {
    if (answerButton.textContent.trim() === 'Show Answer') {
      answerButton.textContent = 'Hide answer';
    } else {
      answerButton.textContent = 'Show Answer';
    }

    answerText.classList.toggle('answer--hidden');
  });

  function getQuerySelector(datajs) {
    return cardElement.querySelector(`[data-js="${datajs}"]`);
  }
}

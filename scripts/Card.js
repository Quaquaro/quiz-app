export default function Card(cardElement) {
  const bookmarkIcon = getQuerySelector('bookmark');
  const bookmarkButton = getQuerySelector('bookmarkButton');

  const answerText = getQuerySelector('answer-Text');
  const answerButton = getQuerySelector('answer-button');

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

//Set Bookmark
console.clear();
const bookmarkButton = document.querySelector('.question-card__bookmark');
const bookmark = document.querySelector('.bookmark');
bookmarkButton.addEventListener('click', () => {
  bookmark.src = './images/bookmark-filled.svg';
});

//Show Answers
const answerButton = document.querySelector('.button');
const answerText = document.querySelector('.answer--hidden');

answerButton.addEventListener('click', () => {
  answerText.classList.toggle('answer--hidden');
  answerButton.innerText = 'Hide answer';
  answerButton.classList.add('hide');
});

// function for querySelector

function getQuerySelectorJsData(jsDataValue) {
  return document.querySelector(`[data-js="${jsDataValue}"]`);
}

//function for querySelectorAll

function getQuerySelectorAllJsData(jsDataValue) {
  return document.querySelectorAll(`[data-js="${jsDataValue}"]`);
}

//Set Bookmark

const bookmarks = getQuerySelectorAllJsData('quiz');

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {});
});

function addBookmark() {
  if (bookmark.src.includes('bookmark-empty')) {
    bookmark.src = './images/bookmark-filled.svg';
  } else {
    bookmark.src = './images/bookmark-empty.svg';
  }
}
// const bookmark = getQuerySelectorJsData('bookmark');

// bookmark.addEventListener('click', () => {

// });

// const bookmarkButton = document.querySelector(".question-card__bookmark");
// const bookmark = document.querySelector(".bookmark");
// bookmarkButton.addEventListener("click", () => {
//   bookmark.src = "./images/bookmark-filled.svg";
// });

//Show Answers

// const answerButton = document.querySelector(".button");
// const answerText = document.querySelector(".answer--hidden");

// answerButton.addEventListener("click", () => {
//   answerText.classList.toggle("answer--hidden");
//   answerButton.innerText = "Hide answer";
//   answerButton.classList.add("hide");
// });

//Counter for textarea
const textareaContentAnswer = document.querySelector('[data-js="add-answer"]');
const counterElement = document.querySelector('.textcount');

textareaContentAnswer.addEventListener('input', () => {
  let textlength = textareaContentAnswer.value.length;
  counterElement.value = textlength + ' of 200';
  textareaContentAnswer.classList.remove('form__textarea--red-border');
  if (textlength > 200) {
    //Farbe ändern mit ClassList Red Counter and Red Border
    textareaContentAnswer.classList.add('form__textarea--red-border');
  }
});

const textareaContentQuestion = document.querySelector(
  '[data-js="add-question"]'
);
const counterQuestion = document.querySelector(
  '[data-js="add-question-counter"]'
);

textareaContentQuestion.addEventListener('keyup', () => {
  let textlength = textareaContentQuestion.value.length;
  counterQuestion.value = textlength + ' of 200';
  textareaContentQuestion.classList.remove('form__textarea--red-border');
  if (textlength > 200) {
    textareaContentQuestion.classList.add('form__textarea--red-border');
  }
});

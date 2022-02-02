export default {
  title: 'Components/Question-card',
};

export const Default = () => `
      <section class="question-card rounded border border-solid mx-4 my-12 p-3">
        <h2 class="uppercase m-0">Question:</h2>
        <p class="question-card__text">Did you know the correct answer?</p>
        <button class="question-card__bookmark border-none p-0">
          <img src="images/bookmark-empty.svg" alt="Bookmark" width="32" height="32" />
        </button>
        <button class="show">Show Answer</button>
        <p class="answer">Answer:</p>
        <p class="tag"><span class="tag">tag1</span> <span class="tag">tag2</span> <span class="tag">tag3</span> <span class="tag">tag4</span></p>
      </section>
`;

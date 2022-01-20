export default {
  title: "Components/Question-card",
};

export const Default = () => `
      <section class="question-card rounded border-solid m-4">
        Question:
        <button class="question-card__bookmark border-none p-0">
          <img src="../../images/bookmark-empty.svg" alt="Bookmark" width="32" height="32">
        </button>
        <p class="answer">Answer:</p>
        <button class="show">Show Answer</button>
      </section>
`;

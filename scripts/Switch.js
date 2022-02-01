export default function Switch() {
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allPages.forEach(page => {
        page.classList.add('hidden'); //all pages hidden
      });
      allButtons.forEach(button => {
        button.classList.add('footer--opacity'); //all buttons have opacity
      });
      const buttonAttribute = event.target.getAttribute('data-img');
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]`
      );
      const currentButton = document.querySelector(
        `[data-nav="${buttonAttribute}"]`
      );
      const heading = document.querySelector('h1');
      currentPage.classList.remove('hidden');
      currentButton.classList.remove('footer--opacity');
      heading.innerText = buttonAttribute.toUpperCase();
    });
  });
}

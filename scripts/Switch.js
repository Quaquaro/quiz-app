export default function Switch() {
  const buttonHome = getQuerySelector('home');
  const buttonCreate = getQuerySelector('create');
  const buttonBookmark = getQuerySelector('bookmark');
  const buttonProfile = getQuerySelector('profile');

  const pageHome = getQuerySelectorPage('home');
  const pageBookmark = getQuerySelectorPage('bookmark');
  const pageCreate = getQuerySelectorPage('create');
  const pageProfile = getQuerySelectorPage('profile');

  const headline = document.querySelector('[data-js="headline"]');

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('footer--opacity');
    buttonBookmark.classList.add('footer--opacity');
    buttonCreate.classList.add('footer--opacity');
    buttonProfile.classList.add('footer--opacity');

    headline.innerText = 'QUIZ-APP';
  });

  buttonBookmark.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmark.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.add('footer--opacity');
    buttonBookmark.classList.remove('footer--opacity');
    buttonCreate.classList.add('footer--opacity');
    buttonProfile.classList.add('footer--opacity');

    headline.innerText = 'BOOKMARKS';
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.add('footer--opacity');
    buttonBookmark.classList.add('footer--opacity');
    buttonCreate.classList.remove('footer--opacity');
    buttonProfile.classList.add('footer--opacity');

    headline.innerText = 'CREATE';
  });

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmark.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');

    buttonHome.classList.add('footer--opacity');
    buttonBookmark.classList.add('footer--opacity');
    buttonCreate.classList.add('footer--opacity');
    buttonProfile.classList.remove('footer--opacity');

    headline.innerText = 'Profile';
  });

  function getQuerySelector(jsdata) {
    return document.querySelector(`[data-nav="${jsdata}"]`);
  }
  function getQuerySelectorPage(jsdata) {
    return document.querySelector(`[data-page="${jsdata}"]`);
  }
}

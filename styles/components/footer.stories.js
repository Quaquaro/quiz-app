export default {
  title: "Components/Footer",
};

export const Default = () => `
    <nav class="p-2 mx-4 flex justify-evenly flex-wrap footer rounded-b-lg">
      <a href="#" class="footer__link"
        ><img src="../../images/home.svg" alt="Gehe zur Startseite" height="32" width="32"
      /></a>
      <a href="pages/bookmarks.html" class="footer__link"
        ><img src="../..images/bookmark-filled.svg" alt="Lesezeichen" width="32" height="32"
      /></a>
      <a href="pages/form.html" class="footer__link"
        ><img src="../..images/edit.svg" alt="Frage erstellen" height="32" width="32"
      /></a>
      <a href="pages/form.html" class="footer__link">
        <img src="../..mages/avatar.svg" alt="zur Profilseite" height="32" width="32" />
      </a>
    </nav>
`;

import fetchCharacters from "./list_characters.js";
import setMainContent from "./manage_views.js";
import fetchComics from "./list_comics.js";
window.pubKey = '0198140dc9c6b9538882957af716ccd7';
window.paginationCounter = 1;
window.addEventListener('load', () => {
  let mainContent = document.getElementById('content');
  let navItems = document.querySelectorAll('.menu > a');

  // Set event listeners
  navItems.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.paginationCounter = 1;
      setMainContent(mainContent, el.href);
      if (el.innerText === 'Personajes') {
        fetchCharacters();
      } else if (el.innerText ==='Comics') {
        fetchComics();
      }
    })
  })

  setMainContent(mainContent);
})
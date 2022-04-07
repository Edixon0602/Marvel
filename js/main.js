import setMainContent from "./manage_views.js";
import listFetch from "./list_fetch.js";
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
        listFetch('https://gateway.marvel.com:443/v1/public/characters', '#characters-grid');
      } else if (el.innerText === 'Comics') {
        listFetch('https://gateway.marvel.com:443/v1/public/comics', '#comics-grid');
      } else if (el.innerText === 'Series') {
        listFetch('https://gateway.marvel.com:443/v1/public/series', '#series-grid');
      }
    })
  })

  setMainContent(mainContent);
})
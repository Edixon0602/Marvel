import fetchCharacters from "./list_characters.js";
import fetchPagination from "./infinite_scroll.js";
import setMainContent from "./manage_views.js";
window.pubKey = '0198140dc9c6b9538882957af716ccd7';
window.paginationCounter = 1;
window.addEventListener('load', () => {
  //let fetchPaginationButton = document.getElementById('load_more');
  let mainContent = document.getElementById('content');
  let navItems = document.querySelectorAll('.menu > a');

  // Set event listeners
  navItems.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      setMainContent(mainContent, el.href);
      if (el.innerText == 'Personajes') {
        //let fetchPaginationButton = document.getElementById('load_more');
        fetchCharacters();
        
      }
    })
  })

  setMainContent(mainContent);

  // Main characters list
  //fetchPaginationButton.addEventListener('click', fetchPagination);
})
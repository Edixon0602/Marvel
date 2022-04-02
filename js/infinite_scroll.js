import buildList from "./build_list.js";
export default function fetchPagination(source) {
  let fetchUrl;
  let container;
  switch (source) {
    case 'http://127.0.0.1:5500/assets/characters.html': 
      fetchUrl = 'https://gateway.marvel.com:443/v1/public/characters';
      container = '#characters-grid';
    break;
    case 'http://127.0.0.1:5500/assets/comics.html':
      fetchUrl = 'https://gateway.marvel.com:443/v1/public/comics';
      container = '#comics-grid';
    break;
  }
  let offset = window.paginationCounter * 20;
  fetch(`${fetchUrl}?apikey=${pubKey}&offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      let characters = data.data.results;
      buildList(characters, container);
    });
  window.paginationCounter++;
}
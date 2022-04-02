import buildList from "./build_list.js";
export default function fetchPagination() {
  let offset = window.paginationCounter * 20;
  fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${pubKey}&offset=${offset}`)
    .then(response => response.json())
    .then(data => {
      let characters = data.data.results;
      buildList(characters, '#characters-grid');
    });
  window.paginationCounter++;
}
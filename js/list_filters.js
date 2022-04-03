import buildList from "./build_list.js";

export default function listFilters(source) {
  let form = document.getElementById('filters');
  let filterName = document.querySelector('#filters input[name="name"]');
  let order = document.querySelector('#filters select[name="order"]');
  let fetchUrl;
  switch (source) {
    case 'http://127.0.0.1:5500/assets/characters.html':
      fetchUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${pubKey}`;
    break;
  }
  form.addEventListener('keyup', (e) => {
    if (e.target === filterName) {
      fetch(`${fetchUrl}&nameStartsWith=${filterName.value}`)
        .then(response => response.json())
        .then(data => {
          let characters = data.data.results;
          buildList(characters, '#characters-grid', true);
        });
    }
  })
  order.addEventListener('change', (e) => {
    if (e.target === order) {
      fetch(`${fetchUrl}&orderBy=${order.value}`)
        .then(response => response.json())
        .then(data => {
          let characters = data.data.results;
          buildList(characters, '#characters-grid', true);
        });
    }
  })
}
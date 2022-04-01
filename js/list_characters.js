import buildList from "./build_list.js";
export default function fetchCharacters (container) {
    let pubKey = '0198140dc9c6b9538882957af716ccd7';
    let args = {
        'Content-Type': 'application/json'
    }
    
    fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${pubKey}`, args)
    .then(response => response.json())
    .then(data => {
        let characters = data.data.results;
        buildList(characters, '#characters-grid');
    });
}
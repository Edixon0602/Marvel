import buildList from "./build_list.js";
export default function fetchCharacters() {
	fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${pubKey}`)
		.then(response => response.json())
		.then(data => {
			let characters = data.data.results;
			buildList(characters, '#characters-grid');
		});
}
import buildList from "./build_list.js";
export default function fetchComics() {
	fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${pubKey}`)
		.then(response => response.json())
		.then(data => {
			let characters = data.data.results;
			buildList(characters, '#comics-grid');
		});
}
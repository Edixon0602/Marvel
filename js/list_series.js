import buildList from "./build_list.js";
export default function fetchSeries() {
	fetch(`https://gateway.marvel.com:443/v1/public/series?apikey=${pubKey}`)
		.then(response => response.json())
		.then(data => {
			let characters = data.data.results;
			buildList(characters, '#series-grid');
		});
}
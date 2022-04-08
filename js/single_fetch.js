import buildSingle from "./build_single.js";

export default function singleFetch (e) {
  let id = e.target.closest('.list-item').dataset.id;
  fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${pubKey}`)
		.then(response => response.json())
		.then(data => {
			let character = data.data.results[0];
      buildSingle(character);
		});
}
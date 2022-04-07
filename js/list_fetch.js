import buildList from "./build_list.js";

export default function listFetch(target, container) {
	fetch(`${target}?apikey=${pubKey}`)
		.then(response => response.json())
		.then(data => {
			let characters = data.data.results;
			buildList(characters, container);
		});
}
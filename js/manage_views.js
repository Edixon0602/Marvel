import fetchPagination from "./infinite_scroll.js";

export default function setMainContent(container, file = 'http://127.0.0.1:5500/assets/home.html') {
	let args = {
		headers: {
			'Content-Type': 'text/html'
		}
	}
	fetch(file, args)
		.then(response => response.text())
		.then(data => {
			container.innerHTML = data;
			if (file === 'http://127.0.0.1:5500/assets/characters.html') {
				let fetchPaginationButton = document.getElementById('load_more');
				fetchPaginationButton.addEventListener('click', fetchPagination);
			}
		});
}
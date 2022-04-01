export default function buildList(list, container) {
	let targetContainer = document.querySelector(container);
	let fragment = document.createDocumentFragment();
	list.forEach(el => {
		let card = document.createElement('article');
		let thumbnail = document.createElement('img');
		let name = document.createElement('span');
		thumbnail.src = `${el.thumbnail.path}.${el.thumbnail.extension}`;
		name.innerText = el.name;
		card.appendChild(thumbnail);
		card.appendChild(name);
		fragment.appendChild(card);
		console.log(el);
	});
	targetContainer.appendChild(fragment);
}
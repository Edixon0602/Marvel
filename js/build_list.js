import singleFetch from "./single_fetch.js";

export default function buildList(list, container, filter) {
  let targetContainer = document.querySelector(container);
	let fragment = document.createDocumentFragment();
  if (filter) {
    targetContainer.innerHTML = '';
  }
	list.forEach(el => {
		let card = document.createElement('article');
		let thumbnail = document.createElement('img');
		let content = document.createElement('div');
		let name = document.createElement('h4');
    card.addEventListener('click', singleFetch);
		card.classList.add('list-item');
    card.dataset.id = el.id;
		content.classList.add('meta-content');
		thumbnail.src = `${el.thumbnail.path}.${el.thumbnail.extension}`;
		name.classList.add('name');
		name.innerText = el.name || el.title;
		card.appendChild(thumbnail);
		content.appendChild(name);
		card.appendChild(content);
		fragment.appendChild(card);
	});
	targetContainer.appendChild(fragment);
}
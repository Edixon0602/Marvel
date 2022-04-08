import setMainContent from "./manage_views.js";

export default function buildSingle (character) {
  const observer = new MutationObserver(handleDOMMutations);
  let content;
  let fragment = document.createDocumentFragment();
  let thumbnail = document.createElement('img');
  let name = document.createElement('h2');
  let description = document.createElement('p');
  let mainContent = document.getElementById('content');
  function handleDOMMutations(mutations_list) {
    mutations_list.forEach(function(mutation) {
      mutation.addedNodes.forEach(function() {
        content = document.getElementById('single-content');
        content.appendChild(fragment);
      });
    });
  }
  observer.observe(mainContent, { subtree: false, childList: true });
  setMainContent(mainContent, 'http://127.0.0.1:5500/assets/single.html');
  thumbnail.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  name.innerText = character.name;
  description.innerText = character.description;
  fragment.appendChild(thumbnail)
  fragment.appendChild(name);
  fragment.appendChild(description);
}
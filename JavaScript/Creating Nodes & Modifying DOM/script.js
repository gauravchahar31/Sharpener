const itemList = document.querySelector('#items');
const container = document.querySelector('#main');

const h3 = document.createElement('h3');
const textNode = document.createTextNode('Hello World');
h3.appendChild(textNode);
container.insertBefore(h3, itemList);

const newli = document.createElement('li');
const litext = document.createTextNode('Hello World');
newli.appendChild(litext);
newli.setAttribute('class', "list-group-item");

itemList.insertBefore(newli, itemList.childNodes[0]);

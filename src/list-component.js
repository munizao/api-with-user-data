
export function makeListTemplate(card) {
    const html = /*html*/ `
        <li>
            <h2>${card.name}</h2>
            <p>${card.manaCost}</p>
            <img src="${card.imageUrl}">
            <p>${card.text}</p>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const cardList = document.getElementById('card-list');

export default function loadCards(cards) {
    console.log('loadCards');
    while(cardList.firstChild) {
        cardList.firstChild.remove();
    }
    cards.forEach(card => {
        const dom = makeListTemplate(card);
        cardList.appendChild(dom);
    });
}